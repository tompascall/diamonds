import React, { Component } from 'react';
import 'whatwg-fetch';

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

    updateItemData (url, item) {
		this.setState({ isLoading: true });
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

			this.setState({ isLoading: false});
            return response;
        })
        .then( response => response.json() )
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
            ++item.diamonds;
            this.updateItemData(`/api/items/${item.id}`, item);
            
        };

        const decrement = (item) => (e) => {
            --item.diamonds;
            this.updateItemData(`/api/items/${item.id}`, item);
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
