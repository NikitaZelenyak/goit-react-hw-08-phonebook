import { React } from "react";
import toast, { Toaster } from 'react-hot-toast';
 import { Formik,  Form,  } from 'formik';
import { Wrapper,WrapBtn,Label,Input, Message, } from "./AddContactForm.styled";
import * as yup from 'yup';
import { useAddContactMutation,useGetContactsQuery } from "redux/contacts/contactsApi";
import { TailSpin } from  'react-loader-spinner'
import Fab from '@mui/material/Fab';




import AddIcon from '@mui/icons-material/Add';





let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})
export const AddContactForm = () => {
    const [ addContact ] = useAddContactMutation();
    const { data: contacts,isFetching, } = useGetContactsQuery();

    const getInfoContact = async ({ name, number, email,  }, action,) => {
        try {
           
            const checkOnIncludes = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase());     
      
            if (checkOnIncludes) {
            return toast.error(`This name: "${name}" already have in list`)
            };
             await addContact({ name, number, email,  });
              
               toast.success(`Contact added`)
             
        } catch (error) {
            
            toast.error(`${error}`)
        }

      
        action.resetForm();
          
     
    }


    return (
      
        <Wrapper>
  
            <div ><Toaster  position="top-right"     /></div>
            <Formik
                initialValues={
                {
                    name: '',
                    number: '',
                }}                   
                validationSchema={schema}
                onSubmit={getInfoContact}
            >
                <Form>                   
                    <Label htmlFor="name">Enter the name</Label>                   
                    <Input id="name" name="name" type="text"></Input>
                    <Message component='div' name="name"></Message>                   
                    <Label htmlFor="number">Enter the number</Label>
                    <Input id="number" name="number" type="tel"></Input>
                    <Message component='div' name="number"></Message>   
                    <WrapBtn>                      
                        <Fab
                            color="primary"
                            aria-label="add"                  
                            type='submit'  >                      
                            {isFetching ?                          
                                <TailSpin                     
                                    height="30"                        
                                    width="30"                       
                                    radius=""   
                                    color='white' /> :
                                <AddIcon />
                          }                      
                        </Fab>
                    </WrapBtn>
                   
                 
                    
     
     
      

                </Form>              
            </Formik>
                </Wrapper>

        )
    }


