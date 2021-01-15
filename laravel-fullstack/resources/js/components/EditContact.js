import React from 'react';
import axios from 'axios';

import '../../css/global.css';

class EditContact extends React.Component {
    state = {
        nome: '',
        email: '',
        telefone: ''
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    updateContact = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/contact/${id}`, this.state);
        if (res.data.status === 200) {
            this.props.history.push("/");
        }

    }
    async conponetDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`contact/${id}/edit`);
        console.log(res.data.contact.nome);
        this.setState({ nome: res.data.contact.nome });
        this.setState({ email: res.data.contact.email });
        this.setState({ telefone: res.data.contact.telefone })

    }
    render() {
        return (
            <div>
                <h1>Hwewfsdf</h1>
            </div>
        )
    }
}

export default EditContact;