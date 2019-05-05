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
            newName: '',
            newQuantity: 1,
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

    addItem = () => {
        let items = this.state.items;
        items.push({
            name: this.state.newName,
            quantity: this.state.newQuantity,
        });
        this.setState({items: items, newName: '', newQuantity: 1});

        // TODO POST request to API
    }


    deleteItem = (index) => {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items});

        // TODO DELETE request to API 
    }

    render() {
        let items;
        if (this.state.loaded) {
            items = this.state.items.map((item, index) => (
                <Item key={item.name} name={item.name} quantity={item.quantity} index={index} delete={this.deleteItem}/>
            ));
        } else {
            items = <h6>Loading...</h6>;
        }

        return (
            <div>
                <h4>Inventory</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                        <tr>
                            <td>
                                <input className="form-control" type="text" placeholder="New Name" value={this.state.newName} onChange={(e) => this.setState({newName: e.target.value})} />
                            </td>
                            <td>
                                <input className="form-control" type="number" placeholder="New Quantity" value={this.state.newQuantity} onChange={(e) => this.setState({newQuantity: e.target.value})} />
                            </td>
                            <td>
                                <button className="btn btn-success" onClick={this.addItem}>Add Item</button>
                            </td>
                        </tr>
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

        // TODO add API call to mock edit endpoint (it doesn't do anything so I was too lazy to add it)
    }

    render() {
        if (!this.state.editing) {
            return (
                <tr>
                    <td>{this.state.name}</td>
                    <td>{this.state.quantity}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => this.setState({editing:true})}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.props.delete(this.props.index)}>Delete</button>
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
                        <button className="btn btn-warning" onClick={this.edit}>Save</button>
                    </td>
                </tr>
            );
        }
    }
}

export default App;
