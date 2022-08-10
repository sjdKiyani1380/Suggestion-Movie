import React from "react";
import { Box } from "@mui/system";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchSingleMovieQuery } from "../../../app/services/moviesApi";
import { CustomButton } from "./../../customButton/CustomButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ViewMovie = (): JSX.Element | any => {
  const { id }: any = useParams();
  const { data: movie } = useFetchSingleMovieQuery(id);
  const navigate = useNavigate();

  if (movie) {
    return (
      <Box
        sx={{
          background: "linear-gradient(to right,rgb(0, 46, 73),#330030)",
          height: "100vh",
          paddingTop: "10%",
          textAlign: "center",
        }}
      >
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
        <Box
          sx={{
            backgroundColor: "rgba(255,255,255,0.2)",
            width: "50%",
            height: "50vh",
            borderRadius: "10px",
            textAlign: "center",
            color: "white",
            margin: "20px auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px 0",
            gap:"15px"
          }}
        >
          <h4 style={{ color: "black" }}>
            The Name Of Movie :{" "}
            <span style={{ color: "white" }}>{movie.name}</span>{" "}
          </h4>

          <h4 style={{ color: "black" }}>
            The Description Of Movie :{" "}
            <span style={{ color: "white" }}>{movie.description}</span>{" "}
          </h4>
          <h4 style={{ color: "black" }}>
            The Creator of This Movie :{" "}
            <span style={{ color: "white" }}>{movie.creator}</span>{" "}
          </h4>

          <h4 style={{ color: "black" }}>
            The Genre of This Movie :
            {movie.genre.actionGenre ? (
              <span style={{ color: "white" }}> Action</span>
            ) : (
              <p></p>
            )}
            {movie.genre.dramaGenre ? (
              <span style={{ color: "white" }}> Drama</span>
            ) : (
              <span></span>
            )}
            {movie.genre.documentaryGenre ? (
              <span style={{ color: "white" }}> Documentary</span>
            ) : (
              <span></span>
            )}
          </h4>

          <h4 style={{ color: "black" }}>
            The Release date of this movie :
            <span style={{ color: "white" }}>{movie.date}</span>
          </h4>
        </Box>
      </Box>
    );
  }
};

export default ViewMovie;
