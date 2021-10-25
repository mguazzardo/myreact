import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contact) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contact.student_name}</h5>
                        <h5 class="card-title">{contact.student_age}</h5>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts
