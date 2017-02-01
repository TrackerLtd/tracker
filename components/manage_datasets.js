import React from 'react';
import ReactDOM from 'react-dom';

var ManageDatasets = React.createClass({
	render: function() {
		return (
			<section>
				<aside>
					<h2>Add New Dataset</h2><button>+</button>
				 	<h2>Edit Existing Dataset</h2>
				 	<ul>
				 		<li>Currently no datasets to edit</li>
				 	</ul>
				</aside>
				<section>
					<h2>Customize Your Dataset</h2>
					<form>
						<label htmlFor="title">Title
							<input type="text" id="title" />
						</label>
						<label htmlFor="categories">Create your categories
							<input type="text" id="categories" />
						</label>
						<p>Edit or delete your categories</p>
						<ul>
							<li>Currently no categories</li>
						</ul>
						<label htmlFor="inputs">Select inputs
							<input type="checkbox" name="inputs" value="vendor" />Vendor
							<input type="checkbox" name="inputs" value="amount" />Amount
							<input type="checkbox" name="inputs" value="date" />Date
						</label>
						<label htmlFor="target">Create target data?
							<input type="radio" name="target" value="yes" checked />Yes
							<input type="radio" name="target" value="no" />No
						</label>
						<input type="submit" value="Let's do this!" />
					</form>
				</section>
			</section>
		)
	}
});

export default ManageDatasets;