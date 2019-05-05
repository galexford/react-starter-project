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
        this.state={
            editing: false,
            name: props.name,
            quantity: props.quantity,
            editName: props.name, 
            editQuantity: props.quantity,
        }
    }

    edit = () => {
        this.setState({
            name: this.state.editName,
            quantity: this.state.editQuantity,
            editing: false,
        });
    }

    render() {
        if (!this.state.editing) {
            return (
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.quantity}</td>
                    <td>
                        <button class="btn btn-primary" onClick={() => this.setState({editing:true})}>Edit</button>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>
                        <input className="form-control" type="text" placeholder="Edit Name" value={this.state.editName} onChange={(e) => this.setState({editName: e.target.value})} />
                    </td>
                    <td>
                        <input className="form-control" type="number" placeholder="Edit Quantity" value={this.state.editQuantity} onChange={(e) => this.setState({editQuantity: e.target.value})} />
                    </td>
                    <td>
                        <button class="btn btn-warning" onClick={this.edit}>Save</button>
                    </td>
                </tr>
            );
        }
    }
}

export default App;
