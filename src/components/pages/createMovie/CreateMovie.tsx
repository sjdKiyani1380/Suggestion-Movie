import React from "react";
import { Box } from "@mui/material";
import Form from "../../form/Form";
import { useAddMovieMutation } from "../../../app/services/moviesApi";
import { toast } from "react-toastify";

const CreateMovie = () => {
  const [addMovie, { isLoading, isError,error }] = useAddMovieMutation();

  React.useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message, { theme: "dark" });
    }
  }, [isError,error]);

  const handelCreateMovie = (
    suggestion: string,
    description: string,
    creator: string,
    genre: {
      actionGenre: boolean,
      dramaGenre: boolean,
      documentaryGenre: boolean,
    },
    date:string,
  ) => {
    addMovie({
      name: suggestion,
      description: description,
      creator: creator,
      genre: {
        actionGenre: genre.actionGenre,
        dramaGenre: genre.dramaGenre,
        documentaryGenre: genre.documentaryGenre,
      },
      date:date
    });
  };


  return (
    <Box
      sx={{
        background: "linear-gradient(to right,rgb(0, 46, 73),#330030)",
        margin: "0",
      }}
    >
      <Form
        onFormSubmit={handelCreateMovie}
        suggestion=""
        description=""
        successMessage="create is success !"
        action={false}
        documentary={false}
        drama={false}
        titleButton='send Movie'
        isLoading={isLoading}
        date=''
      />
    </Box>
  );
};

export default CreateMovie;
