import styled from "styled-components";
import { Field } from "formik";
import { ErrorMessage } from "formik";


export const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
width: 600px;
 background-color: #6161e9e2;
 border-radius: 4px;
padding-top: 20px;
padding-bottom: 20px;
`
export const WrapBtn = styled.div`
display: flex;
    margin-top: 10px;
    justify-content: center;

`


// export const Btn = styled(Fab)`

//      display: block;
//     margin-left: auto;
//     margin-right: auto;
//      background-color: #fcf8f8fd;
//    border: none;
//    padding: 4px;
//    margin-top: 10px;
// cursor: pointer;
//    border-radius: 8px;

//    &:hover{   
//   background-color: #4b4bc9;;

//    }


// `
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
right: 20px;
max-width: 300px;
padding: 15px;
background-color: #6e6ee0;
border-radius: 6px;
margin-top: 4px;
margin-bottom: 0;
color: #ffffff;

`