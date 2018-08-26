import React from 'react';
import { getFunName } from '../helpers.js';

class StorePicker extends React.Component {
	gotoStore(event) {
		event.preventDefault();
		
	}
	render(){
		return(
			
			<form action="" className="store-seector" onSubmit={this.gotoStore}>
				<h2>Please Enter a Store</h2>
				<input 
					type="text"
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store -></button>
			</form>
			
		)
	}
}

export default StorePicker;