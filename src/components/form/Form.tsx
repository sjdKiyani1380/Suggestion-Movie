import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { BoxForm, DateSelect, MyTextField } from "./StyleMUI";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomButton } from "./../customButton/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";
import { useAppSelector } from "../../app/hooks/hooks";
import  CircularProgress  from '@mui/material/CircularProgress';



interface Props {
  suggestion: string;
  description: string;
  onFormSubmit: (
    suggestion: string,
    description: string,
    email: string,
    genre: {
      actionGenre: boolean;
      dramaGenre: boolean;
      documentaryGenre: boolean;
    },
    date:string,
  ) => void;
  successMessage: string;
  action: boolean;
  drama: boolean;
  documentary: boolean;
  titleButton:string;
  isLoading:boolean;
  date:string;
}

const Form = ({
  suggestion,
  description,
  onFormSubmit,
  successMessage,
  action,
  drama,
  documentary,
  titleButton,
  isLoading,
  date,
}: Props) => {
  const [suggestionInput, setSuggestionInput] = useState(suggestion);
  const [descriptionInput, setDescriptionInput] = useState(description);
  const [actionGenre, setActionGenre] = useState(action);
  const [dramaGenre, setDramaGenre] = useState(drama);
  const [documentaryGenre, setDocumentaryGenre] =
    useState(documentary);
    const [valueDate, setValueDate] = useState<string>(date);

  const navigate = useNavigate();

  const email = useAppSelector((store) => store.setUser.email);

  const handelCreateMovie = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email)
      await onFormSubmit(suggestionInput, descriptionInput, email, {
        actionGenre,
        dramaGenre,
        documentaryGenre,
      },valueDate);
    toast.success(successMessage, { theme: "dark" });
    navigate("/movies");
  };

  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <CustomButton
          sx={{ marginTop: "10px" }}
          backgroundColor="red"
          widthIcon="8px"
          heightIcon="8px"
          padding="10px 30px"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/movies")}
        >
          <span>go to back</span>
          <i></i>
        </CustomButton>
      </Box>
      <Box component="form" onSubmit={handelCreateMovie}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "95vh" }}
        >
          <BoxForm item container justifyContent="center" direction="column">
            <Typography>suggestion Movie:</Typography>
            <Box sx={{ textAlign: "center" }}>
              <MyTextField
                name="suggestion"
                label="Suggestion Content ... "
                variant="standard"
                defaultValue={suggestionInput}
                onChange={(e) => setSuggestionInput(e.target.value)}
              />
            </Box>
            {/*end field suggestion movie */}
            <Typography sx={{ marginTop: "30px" }}>Genre:</Typography>
            <Box>
              <FormGroup>
                <Grid direction="row" container justifyContent="center">
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={actionGenre}
                        onChange={(e) =>
                          e.target.checked
                            ? setActionGenre(true)
                            : setActionGenre(false)
                        }
                      />
                    }
                    label="Action"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={dramaGenre}
                        onChange={(e) =>
                          e.target.checked
                            ? setDramaGenre(true)
                            : setDramaGenre(false)
                        }
                      />
                    }
                    label="Drama"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked={documentaryGenre}
                        onChange={(e) =>
                          e.target.checked
                            ? setDocumentaryGenre(true)
                            : setDocumentaryGenre(false)
                        }
                      />
                    }
                    label="Documentary"
                  />
                </Grid>
              </FormGroup>
            </Box>
            {/*end box Genre  */}
            <Typography sx={{ marginTop: "30px" }}>Description:</Typography>
            <Box sx={{ textAlign: "center" }}>
              <MyTextField
                name="description"
                label="Description Content ... "
                rows="3"
                multiline
                defaultValue={descriptionInput}
                onChange={(e) => setDescriptionInput(e.target.value)}
              />
                <br />
              <DateSelect type='date' defaultValue={valueDate} onChange={(e)=> setValueDate(e.target.value)} />
            </Box>
            {/*end field Description movie */}
            <Box sx={{ textAlign: "center", marginTop: "50px" }}>
              <CustomButton
                sx={{ marginTop: "10px" }}
                backgroundColor="green"
                widthIcon="8px"
                heightIcon="8px"
                padding="10px 50px"
                type="submit"
                endIcon={<SendIcon />}
              >
                <span>{titleButton}</span>
                <i></i>
              </CustomButton>
              <br />
              {isLoading ? <CircularProgress /> : null}
            </Box>
          </BoxForm>
        </Grid>
      </Box>
    </div>
  );
};

export default Form;
