import React from 'react';

class Contact extends React.Component {
    render() {
        const { contact } = this.props;
        return (
            <div className="card">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;