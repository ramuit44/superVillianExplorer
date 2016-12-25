import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props){
		super(props); 
		this.state = {searchParams : '',
					  keyPressed : ''};
	}

	/*render(){
		return (
				<div>
					<input onChange={this.onInputChange.bind(this)} />
					 Value is : {this.state.searchParams} 
					 <br></br>
					<p>
					 Value is : {this.state.searchParams} 
					 </p>
					 <br></br>
					 
					 <input value = {this.state.searchParams} />
				</div>
			);
	}*/




	render(){
		return (
				<div className="search-bar">
					<input onChange={this.onInputChange} placeholder="Search for your Super Villan"/>
					

				</div>
			);
	}




	onInputChange = (event) => {
		this.setState({searchParams :event.target.value});
		this.props.onSearchTermChange(this.state.searchParams);
	}
}

export default SearchBar;