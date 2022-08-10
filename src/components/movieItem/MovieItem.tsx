import { Grid } from "@mui/material";
import React from "react";
import { CustomButton } from "../customButton/CustomButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useAppSelector } from "../../app/hooks/hooks";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDeleteMovieMutation } from "../../app/services/moviesApi";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";

interface Props {
  titleMovie: string;
  info: {
    creator: string;
    description: string;
    id: number;
    name: string;
  };
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#110D11",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const MovieItem = ({ titleMovie, info }: Props) => {
  const email = useAppSelector((store) => store.setUser.email);
  const [deleteMovie, { isError, isLoading, error, isSuccess }] =
    useDeleteMovieMutation();

  const [openModalDelete, setOpenModalDelete] = React.useState(false);
  const navigate = useNavigate();

  const handelOpenModalDelete = () => {
    setOpenModalDelete(true);
  };

  const handelCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  const handelClickDelete = async () => {
    await deleteMovie(info.id);
    handelCloseModalDelete();
    if (isError) {
      return toast.error((error as any).data.message, { theme: "dark" });
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      toast.success("Delete is Success", { theme: "dark" });
    }
  }, [isSuccess]);

  return (
    <Grid
      container
      xs={12}
      sx={{
        width: "100%",
        padding: "10px",
        background: "rgba(255,255,255,0.5)",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Modal
        open={openModalDelete}
        onClose={handelCloseModalDelete}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <h4 id="parent-modal-title">
            are you sure you want to permanently delete this movie
          </h4>
          <p id="parent-modal-description">title Movie is : {info.name}</p>
          <p>The Creator of This Movie : {info.creator}</p>
          <Button variant="contained" color="error" onClick={handelClickDelete}>
            Delete
          </Button>
          <br />
          {isLoading ? <CircularProgress /> : null}
        </Box>
      </Modal>

      <Grid
        xs={12}
        sm={4}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        Title Movie : {titleMovie}
      </Grid>
      <Grid
        xs={12}
        sm={8}
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 0",
          gap: "0 20px",
        }}
      >
        {email === info.creator ? (
          <CustomButton
            endIcon={<EditOutlinedIcon />}
            backgroundColor="blue"
            padding="10px  10%"
            widthIcon="8px"
            heightIcon="8px"
            onClick={() => navigate(`/movies/editMovie/${info.id}`)}
          >
            <span>edit </span>
            <i></i>
          </CustomButton>
        ) : null}

        {email === info.creator ? (
          <CustomButton
            endIcon={<DeleteOutlinedIcon />}
            backgroundColor="red"
            padding="10px  10%"
            widthIcon="8px"
            heightIcon="8px"
            onClick={handelOpenModalDelete}
          >
            <span>delete</span>
            <i></i>
          </CustomButton>
        ) : null}

        <CustomButton
          endIcon={<RemoveRedEyeIcon />}
          backgroundColor="greenyellow"
          padding="10px  10%"
          widthIcon="8px"
          heightIcon="8px"
          onClick={() => navigate(`/movies/viewMovie/${info.id}`)}
        >
          <span>view</span>
          <i></i>
        </CustomButton>
      </Grid>
    </Grid>
  );
};

export default MovieItem;
