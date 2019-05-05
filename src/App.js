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
