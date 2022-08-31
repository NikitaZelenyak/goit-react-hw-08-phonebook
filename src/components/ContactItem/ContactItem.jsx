import { Text,Item,} from "./ContactItem.styled"

import { useRemoveContactMutation,  } from "redux/contacts/contactsApi";



import * as React from 'react';
import Avatar from '@mui/material/Avatar';



import CardActions from '@mui/material/CardActions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';









export const ContactItem = ({ id,name,number,seIisOpen,setIdContact}) => {


 
  // const [updateContact, ] = useUpdateContactMutation();


    const [removeContact,{isLoading}] = useRemoveContactMutation();

  const openModalById = async (id) => {

    seIisOpen(isOpen => !isOpen);
    setIdContact(id);

   }





    const deleteContact = (id) => {
        removeContact(id);
        
    }

        
            return (
                <Item key={id} >

    
               
                            
        <Avatar sx={{ bgcolor: '#4886d6' }}>{name.slice(0, 1).toUpperCase()}</Avatar>
        <Text  >
           {name}
        </Text>
        <Text gutterBottom variant="h5" component="div">
         Number:{number}
        </Text>
    
      <CardActions>
                        <Button
                              disabled={isLoading} 
                            onClick={() => deleteContact(id)}   
                            variant="outlined"
                            startIcon={<DeleteIcon />}>
        Delete
      </Button>
      
                        <Button
                             onClick={() => openModalById(id)}
                            variant="contained"
                            endIcon={<EditIcon />}>
       Edit
      </Button>
      </CardActions>

</Item>
             
           )

  
}


