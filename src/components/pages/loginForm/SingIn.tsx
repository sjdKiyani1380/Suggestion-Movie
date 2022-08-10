import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SvgOne from "./../../svgComputer/SvgOne";
import { SvgItemOne, SvgItemTow } from "./../../svgItems/SvgItemOne";
import {
  useLoginMutation,
  useSignUpMutation,
} from "../../../app/services/auth";
import { toast } from "react-toastify";
import { useAppDispatch } from "./../../../app/hooks/hooks";
import { setUser } from "../../../app/features/authSlice";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { CustomButton } from "../../customButton/CustomButton";

const MyBox = styled(Box)`
@media screen and (max-width: 1000px) {
  width:100%;
}

@media screen and (max-width: 480px) {
  width:100%;
  padding: 0 10px;
}
  
}
`;

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [registered, setRegistered] = React.useState<boolean>(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [
    login,
    {
      data: dataLogin,
      isError: isErrorLogin,
      error: errorLogin,
      isLoading: loadingLogin,
    },
  ] = useLoginMutation();
  const [
    signUp,
    {
      data: dataSignUp,
      isLoading: loadingSignUp,
      isError: IsErrorSignUp,
      error: errorSignUp,
    },
  ] = useSignUpMutation();

  console.log();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handelLogin = async () => {
    //handling login for api
    if (email && password) {
      await login({ email: email, password: password });
    } else {
      toast.error("please fill the field", { theme: "dark" });
    }
  };

  const handelSignUp = async () => {
    if (email && password) {
      await signUp({ email: email, password: password });
    } else {
      toast.error("please fill the field", { theme: "dark" });
    }
  };

  React.useEffect(() => {
    if (dataLogin) {
      dispatch(setUser(dataLogin.access_token));
      navigate("/movies");
      toast.success("Login is Success !", { theme: "dark" });
    }

    if (dataSignUp) {
      dispatch(setUser(dataSignUp.access_token));
      navigate("/movies");
      toast.success("Login is Success !", { theme: "dark" });
    }
  }, [dataLogin, dispatch, navigate, dataSignUp]);

  React.useEffect(() => {
    if (isErrorLogin) {
      toast.error((errorLogin as any).data.message, { theme: "dark" });
    }

    if (IsErrorSignUp) {
      toast.error((errorSignUp as any).data.message, { theme: "dark" });
    }
  }, [isErrorLogin, errorLogin, IsErrorSignUp, errorSignUp]);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Box
          component="div"
          sx={{
            width: "100%",
            height: "100vh",
            background: "linear-gradient(to right,rgb(0, 46, 73),#330030)",
            margin: "0",
            padding: "0",
            zIndex: "-99",
            overflow: "hidden",
          }}
        >
          <SvgItemTow className="svg-tow" />
          <SvgOne />
          <SvgItemOne color="#FF0066" className="svg-one" />
          <CssBaseline />
          <MyBox
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              width: "50%",
              height: "100vh",
              padding: "0 100px",
              zIndex: "99",
              backdropFilter: "blur(8px)",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            {registered ? (
              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Log In
              </Typography>
            ) : (
              <Typography component="h1" variant="h5" sx={{ color: "white" }}>
                Sign Up
              </Typography>
            )}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" sx={{ color: "white" }} />}
                label="Remember me"
                sx={{
                  color: "white",
                }}
              />

              {registered ? (
                <CustomButton
                  onClick={handelLogin}
                  backgroundColor="blue"
                  loading={loadingLogin}
                  widthIcon="12px"
                  heightIcon="12px"
                  fullWidth
                >
                  <span>Log In</span>
                  <i></i>
                </CustomButton>
              ) : (
                <CustomButton
                  onClick={handelSignUp}
                  loading={loadingSignUp}
                  backgroundColor="blue"
                  widthIcon="12px"
                  heightIcon="12px"
                  fullWidth
                >
                  <span>Sign Up</span>
                  <i></i>
                </CustomButton>
              )}
              <Grid container>
                <Grid item xs>
                  {registered ? (
                    <Link
                      href="#"
                      variant="body2"
                      sx={{ color: "white", textDecoration: "none" }}
                    >
                      Forgot password?
                    </Link>
                  ) : null}
                </Grid>
                <Grid item>
                  {registered ? (
                    <Link
                      variant="body2"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setRegistered(false)}
                    >
                      Don't have an account? Sign Up
                    </Link>
                  ) : (
                    <Link
                      variant="body2"
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                      onClick={() => setRegistered(true)}
                    >
                      Go To Log IN?
                    </Link>
                  )}
                </Grid>
              </Grid>
            </Box>
          </MyBox>
        </Box>
      </div>
    </ThemeProvider>
  );
}
