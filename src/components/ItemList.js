import React, { Component } from 'react';
import 'whatwg-fetch';
//import {connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
	constructor () {
		super();

		this.state = {
			items: [],
			hasErrored: false,
			isLoading: false
		};
	}

	fetchData (url) {
		this.setState({ isLoading: true });
		fetch(url).then(response => {
			if (!response.ok) {
				throw Error(response.statusText);
			}

			this.setState({ isLoading: false});
			return response;
		})
		.then(response => response.json())
		.then(items => this.setState({ items }))
		.catch(() => this.setState( {hasErrored: true}));
	}

	componentDidMount () {
		this.fetchData('/api/items');
	}

	render () {
		if (this.state.hasErrored) {
			return (<p>Sorry! There was an error loading the items</p>);
		}

		if (this.state.isLoading) {
			return (<p>Loading...</p>);
        }

        const modStyle = { padding: "0 10px", cursor: "pointer" };

        const increment = (item) => (e) => {
            console.log('increment', item);
        };

        const decrement = (item) => (e) => {
            console.log('decrement', item);
        };

		return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Diamond</th>
                        <th>Modify</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map( item => (
                        <tr key={ item.id }>
                            <td>{ item.name }</td>
                            <td>{ item.diamonds }</td>
                            <td>
                                <span style={ modStyle } onClick={ increment(item) }>+</span>
                                <span style={ modStyle } onClick={ decrement(item) }>-</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
		);
	}
}

export default ItemList;
