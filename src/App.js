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

class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return <h4>Inventory</h4>;
    }
}

export default App;
