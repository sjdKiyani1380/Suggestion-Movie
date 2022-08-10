import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../components/pages/loginForm/SingIn";
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from "../app/hooks/hooks";
import HomeMovies from './../components/pages/homeMovie/HomeMovies';
import NotFound from './../components/pages/notFound/NotFound';
import CreateMovie from "../components/pages/createMovie/CreateMovie";
import EditMovie from "../components/pages/editMovie/EditMovie";
import ViewMovie from './../components/pages/viewMovie/ViewMovie';

const Router = () => {
  const { token }:any = useAppSelector((store) => store.setUser);
  if(token)
  return (
    <>
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/movies" element={<HomeMovies />} /> 
          <Route path="/movies/addMovie" element={<CreateMovie />} />
          <Route path="/movies/editMovie/:id" element={<EditMovie />} />
          <Route path="/movies/viewMovie/:id" element={<ViewMovie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );

  return(
    <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  )
};

export default Router;
