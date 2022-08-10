import { Box } from '@mui/material'
import React from 'react'
import Form from '../../form/Form'
import { useEditMovieMutation, useFetchSingleMovieQuery } from '../../../app/services/moviesApi'
import { useParams } from 'react-router-dom'


const EditMovie = ():JSX.Element |any  => {
    const [editMovie] = useEditMovieMutation();
    const { id }:any = useParams();
  
    const {data:movie,isLoading} = useFetchSingleMovieQuery(id)
   
   
    const handelEditMovie = (
      suggestion: string,
      description: string,
      creator: string,
      genre: {
        actionGenre: boolean;
        dramaGenre: boolean;
        documentaryGenre: boolean;
      },
      date:string
    ) => {
      if (id) {
        editMovie({
          name: suggestion,
          description: description,
          creator: creator,
          id: id,
          genre: {
            actionGenre: genre.actionGenre,
            dramaGenre: genre.dramaGenre,
            documentaryGenre: genre.documentaryGenre,
          },
          date:date
        });
      }
    };

  if(movie)
  return (
    <Box sx={{
        background:'linear-gradient(to right,rgb(0, 46, 73),#330030)',
        margin:'0'
    }}
    >
      <Form 
      suggestion={movie.name}
      description={movie.description}
      onFormSubmit={handelEditMovie}
      action={movie.genre.actionGenre}
      documentary={movie.genre.documentaryGenre}
      drama={movie.genre.dramaGenre}
      titleButton='Update Movie'
      isLoading={isLoading}
      date={movie.date}
      successMessage="Your Edit Movie Is Success"/>
      
    </Box>
  )
}

export default EditMovie