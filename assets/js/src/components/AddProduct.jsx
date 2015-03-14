var React = require('react');
var TopHeader = require('./Texts/TopHeader');

var AddProduct = React.createClass({
	render : function () {
		return (
			<div className='small-12 columns'>
				<TopHeader text="New Product" />
				<div className="row">
			    	<div className="large-6 columns">
			    		<div className="row">
				      		<div className="large-12 columns">
					      		<label>Product name:
					       			<input type="text" placeholder="Pruct name" />
					      		</label>
				    		</div>
				    		<div className="large-12 columns">
					      		<div className="row">
							      	<div className="large-6 columns">
							      		<label>Price:
							       			<input type="text" placeholder="Price" />
							      		</label>
						    		</div>
						    		<div className="large-6 columns">
							      		<label>Unit:
							       			<select>
							       				<option>Kg</option>
							       				<option>Lbs</option>
							       			</select>
							      		</label>
						    		</div>
					      		</div>
				    		</div>
				    		<div className="large-12 columns">
				      			<label>Product description:
				        			<textarea rows="10" placeholder="Optional:"></textarea>
				      			</label>
				    		</div>
				    	</div>	
			    	</div>
			    	<div className="large-4 columns left">
			      		<div className="large-12 columns">
					      	<label>Select image:
					       		<input type="file" placeholder="Image" />
					      	</label>
				    	</div>
			      		<div className="large-12 columns">
					      	<img  className="galery" src="../images/limon-persa.jpg" />
				    	</div>
			    	</div>
			  	</div>
				<div className="row">
			    	<div className="large-4 columns">
			      		<a className='btn-action edit'><i className="fa fa-plus"></i> Add Product</a>
			      	</div>
			  	</div>
			</div>	
			);
	}
});
module.exports = AddProduct;