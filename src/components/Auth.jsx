import React, {useEffect, useState} from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  createTheme,
  CssBaseline,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import {makeStyles} from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles(({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paperContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    minWidth: 400,
  },
  paper: {
    margin: theme.spacing(8, 4),
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    cursor: 'pointer',
  }
}));

const Auth = ({ onUserNameChange, onEmailChange, onPasswordChange, onSignInSubmit, userName, email,  password}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    console.log(isLogin)
  }, [isLogin]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container componennt={"main"} className={classes.root}>
        <CssBaseline/>
        <div className={classes.paperContainer}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
            </Avatar>
            <Typography component={"h1"} variant={"h5"}>
              {isLogin ? "Welcome! Enter in your account" : 'Join us! Create your account'}
            </Typography>
            <form className={classes.form} onSubmit={onSignInSubmit} noValidate>
              {!isLogin &&
              <TextField
                variant={'outlined'}
                margin={"normal"}
                required
                fullWidth
                id={"username"}
                label={"Username"}
                name={"username"}
                autoComplete="username"
                autoFocus
                value={userName}
                onChange={onUserNameChange}
              />
              }
              <TextField
                variant={'outlined'}
                margin={"normal"}
                required
                fullWidth
                id={"email"}
                label={"Email address"}
                name={"email"}
                autoComplete="email"
                autoFocus
                value={email}
                onChange={onEmailChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onPasswordChange}
              />
              <Button
                type={'submit'}
                fullWidth
                variant={"contained"}
                color={"primary"}
                className={classes.submit}>
                Enter
              </Button>
              <Grid style={{marginTop: 20}} container>
                <Grid item xs>
                  <Link
                    className={classes.link}
                    onClick={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    {isLogin ? 'Don`t have an account? Registration' : 'Already have account? Log in'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </div>
      </Grid>
    </ThemeProvider>
  );
};

export default Auth;
