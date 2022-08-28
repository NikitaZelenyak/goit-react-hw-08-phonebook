import { Wrapper,List,WrapInput } from "./ContactList.styled"
import { ContactItem } from "components/ContactItem/ContactItem";
import { useState } from "react";


import { useGetContactsQuery, } from "redux/contacts/contactsApi";

import * as React from 'react';

import TextField from '@mui/material/TextField';



export const ContactsList = ({isOpen,setIdContact}) => {
    const { data: contacts,   } = useGetContactsQuery();

    const [filter, setFilter] = useState('');


    const onFilterContacts = (e) => {

        const name = e.currentTarget.value
        setFilter((name));
        
    }




    const getVisibleContact = (contacts) => {
    
            const normalizeFilter = filter.toLowerCase().trim();
        return contacts &&  contacts.filter(contact => (contact.name.toLowerCase().includes(normalizeFilter)))

        
    };
    
    const visibleContacts =  getVisibleContact(contacts)
   




    return (
   
        <Wrapper>    

            <WrapInput>
                <TextField id="find" type="text"
                    onChange={onFilterContacts} label="Find contacts by name" variant="outlined" />
            </WrapInput>
           
         
       
            <List>
                {contacts && visibleContacts.map(contact => (<ContactItem key={contact.id} {...contact} isOpen={isOpen} setIdContact={setIdContact} />))}                  
            </List>
        </Wrapper>
)

   
    }

