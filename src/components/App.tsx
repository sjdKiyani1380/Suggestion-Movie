import React from "react";
import Router from "../router/Router";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch } from "../app/hooks/hooks";
import { checkAuth } from "../app/features/authSlice";

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return <Router />;
}

export default App;
