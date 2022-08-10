import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useFetchMoviesQuery } from "../../../app/services/moviesApi";
import MovieItem from "./../../movieItem/MovieItem";
import Navbar from "./../../appBar/Navbar";
import Loading from "./../../loading/Loading";
import { toast } from "react-toastify";

const HomeMovies = (): JSX.Element | any => {
  const { data, isLoading, isError, error } = useFetchMoviesQuery();
  
  useEffect(() => {
    if (isError) {
      toast.error((error as any).data.message, { theme: "dark" });
    }
  }, [isError,error]);
  
  if (isLoading) {
    return <Loading />;
  }


  if (data)
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Navbar />
        <Container
          fixed
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px ",
            marginTop: "50px",
          }}
        >
          {data.map((movie, index) => {
            return (
              <MovieItem key={index} titleMovie={movie.name} info={movie} />
            );
          })}
        </Container>
      </Box>
    );
};

export default HomeMovies;
