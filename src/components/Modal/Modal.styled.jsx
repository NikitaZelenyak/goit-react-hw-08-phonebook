import styled from "styled-components";
import { Field } from "formik";
import { ErrorMessage } from "formik";

export const Overlay=styled.div`
     position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`

export const ModalBox =styled.div`
     max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`




export const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
width: 600px;
 background-color: #6161e9e2;
 border-radius: 4px;
padding-top: 20px;
padding-bottom: 20px;
`



export const Btn = styled.button`

     display: block;
    margin-left: auto;
    margin-right: auto;
     background-color: #fcf8f8fd;
   border: none;
   padding: 4px;
   margin-top: 10px;
cursor: pointer;
   border-radius: 8px;

   &:hover{   
  background-color: #4b4bc9;;

   }


`
export const Label = styled.label`
    display: flex;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
  color: #fcf8f8fd;
    justify-content: center;
`
export const Input = styled( Field )`
display: block;
margin-left: auto;
margin-right: auto;
padding: 5px;
min-width: 300px;
border: 1px solid blue;
border-radius: 4px;
`


export const Message = styled(ErrorMessage)`
position: absolute;
top: 0;
right: 15px;
width: 300px;
padding: 15px;
background-color: #4b4bc9;
margin-top: 4px;
margin-bottom: 0;
color: #b63316;

`