import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';
import Header from './components/Header.js';

const App = (props) => (
    <div>
        <Header />
        <ItemList />
    </div>
); 

ReactDOM.render(
    <App />,
	document.getElementById('app')
)
