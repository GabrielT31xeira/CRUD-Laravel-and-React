import React from 'react';
import axios from 'axios';

import '../../css/global.css';

class editContact extends React.Component {
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
        const res = await axios.patch(`/edit/${id}`, this.state);
        if (res.data.status === 200) {
            this.props.history.push("/");
        }

    }
    async conponetDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/contact/${id}/edit`);
        console.log(res.data.contact.nome);
        this.setState({ nome: res.data.contact.nome });
        this.setState({ email: res.data.contact.email });
        this.setState({ telefone: res.data.contact.telefone })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.updateContact}>
                    <h1>Editar Contato</h1>
                    <div className="form-group">
                        <input type="text" name="nome" className="form-control" value={this.state.nome}
                            onChange={this.handleInput} placeholder="Nome" required/>
                        <input type="text" name="email" className="form-control" value={this.state.email}
                            onChange={this.handleInput} placeholder="Email" required/>
                        <input type="text" name="telefone" className="form-control" value={this.state.telefone}
                            onChange={this.handleInput} placeholder="telefone" required/>
                        <button type="submit" className="btn btn-primary">Atualizar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default editContact;