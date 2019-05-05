import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

const api_url = 'https://84b8e049-8c1c-4a98-b01b-28f12198c2da.mock.pstmn.io/';

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
        $.ajax({
            url: api_url+'/inventory', 
            type: "GET",
        }).done((data) => {
            this.setState({
                items: data,
                loaded: true,
            });
        });
    }

    render() {
        let items;
        if (this.state.loaded) {
            items = this.state.items.map((item, index) => (
                <Item key={'item-'+index} name={item.name} quantity={item.quantity} />
            ));
        } else {
            items = <h6>Loading...</h6>;
        }

        return (
            <div>
                <h4>Inventory</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        );
    }
}

class Item extends Component {
        

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.quantity}</td>
                <td></td>
            </tr>
        );
    }
}

export default App;
