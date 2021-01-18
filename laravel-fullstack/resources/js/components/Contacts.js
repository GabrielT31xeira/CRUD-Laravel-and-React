import React from 'react';
import axios from 'axios';

import Contact from './Contact';

class Contacts extends React.Component {
    state = {
        contact: [],
        loading: true,
    }
    componentDidMount() {
        this.fetchedContacts();
    }
    fetchedContacts = async () => {
        const res = await axios.get("/contact");
        if (res.status === 200) {
            this.setState({ contact: res.state.contact });
            this.setState({ loading: false });
        }
        console.log(res);
    }
    deleteContact = async (id) => {
        const res = await axios.delete(`contact/${id}`);
        if (res.status === 200) {
            this.fetchedContacts();
        }
    }

    render() {
        if (this.state.loading) {
            return <h1>Carregando...</h1>
        }
        return (
            <div>
                {this.state.contacts.map( this.contact = (
                    <Contact contact = {this.contact} key={this.contact.id} deleteContact = {this.deleteContact}/>
                ))}
            </div>
        )
    }
}

export default Contacts;