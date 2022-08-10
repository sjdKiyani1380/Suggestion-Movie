import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

export const MyTextField = styled(TextField)(() => ({
  padding: "5px 10px",
  width: "70%",
}));

export const BoxForm = styled(Grid)`
  width: 50%;
  border: 2px solid #d8d8d8;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0 10px;
    margin:0 10px;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 10px;
    margin:0 10px;
  }
`;

export const DateSelect =styled.input`
padding: 15px 50px;
background-color:transparent;
border-radius:10px;
outline: none;
border:1px solid rgba(0,0,0,0.3);
`