import React, {Component} from 'react';

class GiphySearch extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.searchGiphy(this.state);
    }
    render(){
        return <form onSubmit={this.handleSubmit}>
        What gif you wanna find? <input onChange = {this.handleChange} type="text" name="search" id="search-input"/>
        <input type="submit" />
        </form>
    }
}

export default GiphySearch;
