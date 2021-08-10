import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import SendIcon from "@material-ui/icons/Send";
import { SubmitHandler, useForm } from "react-hook-form";
import useLoginStyles from "./style";
import { api } from "../../utils/utils";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://nitenviro.com/">
        Enviro
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

type PhoneNumberInput = {
  phoneNumber: string;
};

type LoginInput = {
  code: string;
};
enum FormState {
  SendCode,
  Login,
}

export default function SignInSide() {
  const classes = useLoginStyles();
  const {
    register: phoneRegister,
    handleSubmit: phoneHandleSubmit,
    formState: { isSubmitting: phoneIsSubmiting, errors: phoneErrors },
  } = useForm<PhoneNumberInput>();

  const {
    register: codeRegister,
    handleSubmit: codeHandleSubmit,
    formState: { isSubmitting: codeIsSubmiting, errors: codeErrors },
  } = useForm<LoginInput>();

  const [phoneNumber, setPhoneNumber] = useState<String>("");
  const [formStatus, setFormStatus] = useState<FormState>(FormState.SendCode);
  const history = useHistory();

  const onPhoneSubmit: SubmitHandler<PhoneNumberInput> = async (data) => {
    try {
      const res = await api.auth.sendCodeCreate({ phone: data.phoneNumber });
      console.log(res.data.value);
      setPhoneNumber(data.phoneNumber);
      setFormStatus(FormState.Login);
    } catch (error) {}
  };

  const onCodeSubmit: SubmitHandler<LoginInput> = async (data) => {
    try {
      const res = await api.auth.loginCreate({
        phone: phoneNumber + "",
        loginCode: +data.code,
      });
      const ACCESS_TOKEN_KEY = "acc";
      const REFRESH_TOKEN_KEY = "ref";

      localStorage.setItem(
        ACCESS_TOKEN_KEY,
        res.data.value?.tokens?.accesstoken ?? ""
      );
      localStorage.setItem(
        REFRESH_TOKEN_KEY,
        res.data.value?.tokens?.refreshToken ?? ""
      );
      history.push("/");
    } catch (error) {}
  };

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Box width={"100%"} height={"100vh"} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          className={classes.paperBack}
          component={Paper}
          elevation={2}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              ارسال کد
            </Typography>
            {formStatus === FormState.SendCode && (
              <form
                className={classes.form}
                onSubmit={phoneHandleSubmit(onPhoneSubmit)}
                noValidate
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  {...phoneRegister("phoneNumber", {
                    required: true,
                    maxLength: 12,
                    pattern:
                      /09(0[1-2]|1[0-9]|3[0-9]|2[0-1])-?[0-9]{3}-?[0-9]{4}/i,
                  })}
                  label="شماره تلفن"
                  type="tel"
                  id="phone"
                  autoComplete="current-phone"
                  error={!!phoneErrors.phoneNumber}
                />
                <Button
                  type="submit"
                  disabled={phoneIsSubmiting}
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disableElevation
                  startIcon={<SendIcon />}
                  className={classes.submit}
                >
                  ارسال
                </Button>

                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            )}

            {formStatus === FormState.Login && (
              <form
                className={classes.form}
                onSubmit={codeHandleSubmit(onCodeSubmit)}
                noValidate
              >
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  {...codeRegister("code", {
                    required: true,
                    maxLength: 5,
                    minLength: 5,
                  })}
                  label="کد ارسالی"
                  type="number"
                  id="code"
                  error={!!codeErrors.code}
                />
                <Button
                  type="submit"
                  disabled={codeIsSubmiting}
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disableElevation
                  startIcon={<SendIcon />}
                  className={classes.submit}
                >
                  ورورد
                </Button>

                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export const path = "/login";
