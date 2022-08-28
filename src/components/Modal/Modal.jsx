
 import { Formik,  Form,  } from 'formik';
import { useGetContactsByIdQuery,useUpdateContactMutation } from "redux/contacts/contactsApi";
import { Overlay,ModalBox, Wrapper,Btn,Label,Input, Message, } from "./Modal.styled"
import { useEffect, } from "react";
import * as yup from 'yup';
import { AiOutlineUserAdd } from 'react-icons/ai'





let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})

export const Modal =({idContact,onClose,})=> {


    const { data: contact } = useGetContactsByIdQuery(idContact);

    const [updateContact] = useUpdateContactMutation()


    
    useEffect(() => {

        const  handleKeydown = e => {

            if (e.code === 'Escape') {
                onClose(prevIsOpen=> !prevIsOpen)

        }
    }

        window.addEventListener('keydown', handleKeydown);
        return () => {
            
            window.removeEventListener('keydown', handleKeydown)

        }
        
    }, [onClose])


 const handlerBackdropClose = (e)=> {
        if (e.currentTarget === e.target) {
            onClose(prevIsOpen=> !prevIsOpen)
        }
}

    const handlerUpdate = async(values) => {
    await updateContact({id:idContact, ...values})
          onClose(prevIsOpen=> !prevIsOpen)
}
  
    



    
    return (<Overlay
        onClick={handlerBackdropClose}
    >
  
        <ModalBox>
         { contact && <Wrapper>
                <Formik
                    initialValues={{
                        name: `${contact.name}`,
                        number: `${contact.number}`,
                        email: `${contact.email}`,
                    }}
                    validationSchema={schema}              
                    onSubmit={ handlerUpdate} >              
                    <Form>                  
                        <Label htmlFor="name">Enter the name</Label>
                        <Input id="name" name="name" type="text"></Input>               
                        <Message component='div' name="name"></Message>                    
                        <Label htmlFor="number">Enter the number</Label>                   
                        <Input id="number" name="number" type="tel"></Input>                   
                        <Message component='div' name="number"></Message>                    
                        <Label htmlFor="email">Enter the email</Label>
                        <Input id="email" name="email" type="email"></Input>                        
                        <Btn type='submit'>   <AiOutlineUserAdd size={24} color='#000000'></AiOutlineUserAdd></Btn>               
                    </Form>              
                </Formik>
</Wrapper>}

  
        </ModalBox>
    </Overlay>
    )
    


                
}