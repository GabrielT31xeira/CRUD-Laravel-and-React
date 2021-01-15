import React from 'react';
import axios from 'axios';

import '../../css/global.css';

class AddContact extends React.Component {
    state = {
        nome: '',
        email:'',
        telefone:''
    }
    handleInput = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }
    saveContact = async (e) => {
        e.preventDefault();
        const res = await axios.post("/contact", this.state);
        this.setState({ nome:'', email:'', telefone:'' });
        if (res.data.status === 200) {
            this.props.history.push("/");
        }
        console.log(res);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.saveContact}>
                    <h1>Criar Contato</h1>
                    <div className="form-group">
                        <input type="text" name="nome" className="form-control" value={this.state.nome}
                            onChange={this.handleInput} placeholder="Nome" required/>
                        <input type="text" name="email" className="form-control" value={this.state.email}
                            onChange={this.handleInput} placeholder="Email" required/>
                        <input type="text" name="telefone" className="form-control" value={this.state.telefone}
                            onChange={this.handleInput} placeholder="telefone" required/>
                        <button type="submit" className="btn btn-primary">Adicionar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact;