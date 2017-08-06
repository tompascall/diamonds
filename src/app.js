import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './components/ItemList';

const Header = (props) => (
    <div className="diamond-header">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 299.429 299.429">
            <g>
                <path d="M245.185,44.209H54.245L0,116.533l149.715,138.688l149.715-138.682L245.185,44.209z    M206.746,121.778l-57.007,112.1l-56.53-112.1H206.746z M98.483,109.844l51.232-51.232l51.232,51.232H98.483z M164.119,56.142   h69.323L213.876,105.9L164.119,56.142z M86.311,105.142l-16.331-49h65.331L86.311,105.142z M79.849,121.778l49.632,98.429   L23.223,121.778H79.849z M220.136,121.778h56.071l-106.013,98.203L220.136,121.778z M225.148,109.844l18.694-47.538l35.652,47.538   H225.148z M58.266,58.738l17.035,51.112H19.929L58.266,58.738z" fill="#cce3ff"/>
            </g> 
        </svg>
    </div>
);

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
