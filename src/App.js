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

        this.state = {
            items: [],
            loaded: false,
        };
    }

    componentDidMount() {
    }

    render() {
        let items;
        if (this.state.loaded) {
            items = this.state.items.map((item, index) => (
                <div>
                    <span>{item.name}</span>
                    <span>{item.quantity}</span>
                </div>
            ));
        } else {
            items = <h6>Loading...</h6>;
        }

        return (
            <div>
                <h4>Inventory</h4>
                {items}
            </div>
        );
        
    }
}

export default App;
