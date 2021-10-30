import React from 'react'
import './stylesheets/SearchBar.css'

class SearchBar extends React.Component{
	state = { term: '' }

	onInputChange = event => {
		this.setState({ term: event.target.value})
	}

	onFormSubmit = event => {
		event.preventDefault();
		// this.setState({ term: event.target.value});
		this.props.onTermSubmit(this.state.term);
	}

	render(){
		return (
			<div className="search-bar ui segment">
			<form onSubmit={e => this.onFormSubmit(e)} className="ui form">
					<div className="field">
						<label>Search</label>
						<input 
							type="text" 
							value={this.state.term}
							onChange={this.onInputChange}
							autoFocus
							/>
						</div>
				</form>
			</div>
		)
	}
}

export default SearchBar;