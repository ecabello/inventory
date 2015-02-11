module.exports = {
  attributes: {
    // The object that we are trying to lock (e.g. product.id)
    object: {
        type: 'string',
        required: true
    },
    // the type of lock (e.g. "p" for Products. "w" for warehouses)
    type: {
      type: 'string'
    },
    // status
    locked: {
      type: 'boolean',
      required: true,
      defaultsTo: false
    }
  },

  lock: function(id, type, cb) {
    var self = this;
    // Go mongo native to access findAndModify which is atomic
    // TODO: Delegate and abstract for different implementations
    this.native(function(err, collection) {
      collection.findAndModify({
          object: id,
          type: type,
          locked: false
        },
        null,
        {$set: {
          object: id,
          type: type,
          locked: true}
        },
      {upsert: true, new: true}, function (err, object) {
        if (err)
          return cb(err, null);

        // already locked by someone else
        // This lock is not re-entrant so be careful
        if (!object)
          return cb(null, null);

        // successful lock
        try {
          return cb(null, object);
        }
        finally {
          self.unlock(id, type);
        }
      });
    });
  },

  unlock: function(id, type) {
    // This is waterline code
    this.update({object: id, type: type}, {locked: false}).exec(function(err, obj) {});
  }
};
