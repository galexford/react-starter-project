import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <div className='container'>
            <h2>Inventory Starter Project</h2>
            <Inventory />
        </div>
    );
}

// Starter code for the inventory component.
class Inventory extends Component {
    constructor(props) {
        super(props);
        // TODO setup initial state for the component
    }

    // componentDidMount is the best place in the component lifecycle to get data
    // from the API when the component first loads.
    // Check out: https://reactjs.org/docs/state-and-lifecycle.html
    componentDidMount() {
        // TODO GET request to Postman mock server
    }

    // Renders the component into the DOM
    // Check out: https://reactjs.org/docs/rendering-elements.html
    render() {
        return <h4>Inventory</h4>;
        // TODO render a list of components representing items in the inventory
    }
}

// TODO implement an Item component that represents the view for a single item.

export default App;
