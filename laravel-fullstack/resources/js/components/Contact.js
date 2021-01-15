import React from 'react';
import {Link} from 'react-router-dom';

class Contact extends React.Component {
    delContact = (id) =>{
        this.props.deleteContact;
    }
    render() {
        const { contact } = this.props;
        return (
            <div className="card mb-5">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2">
                            <span className="image">{contact.nome[0]}</span>
                        </div>
                        <div className="col-md-2">
                            {contact.nome}
                        </div>
                        <div className="col-md-2">
                            {contact.email}
                        </div>
                        <div className="col-md-2">
                            {contact.telefone}
                        </div>
                        <div className="col-md-2">
                            <Link className="btn btn-warning" to={`/edit/${contact.id}`}>
                                Editar
                            </Link>
                        </div>
                        <div className="col-md-2">
                            <Link className="btn btn-danger" onClick={()=>this.delContact(contact.id)}>
                                Apagar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;