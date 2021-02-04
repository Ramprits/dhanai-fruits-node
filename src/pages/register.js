import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useForm } from "react-hook-form";

export default function RegisterPage(props) {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {}
  });
  const content = {
    brand: {
      image: "mui-assets/img/logo-pied-piper-icon.png",
      width: 80
    },
    header: "Create a new account",
    terms: "I agree to the terms of use and privacy policy.",
    "01_primary-action": "Sign up",
    "01_secondary-action": "Already have an account? Sign in",
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["header"]}
            </Typography>
          </Box>
          <Box>
            <form
              noValidate
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    required
                    fullWidth
                    autoComplete="fname"
                    name="firstName"
                    inputRef={register({ required: true })}
                    error={!!errors.firstName}
                    helperText={`${
                      !!errors.firstName && "Please enter your first name"
                    }`}
                    label="First name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    variant="outlined"
                    required
                    fullWidth
                    name="lastName"
                    inputRef={register({ required: true })}
                    error={!!errors.lastName}
                    helperText={`${
                      !!errors.lastName && "Please enter your last name"
                    }`}
                    label="Last name"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    inputRef={register({ required: true })}
                    error={!!errors.email}
                    helperText={`${
                      !!errors.email && "Please enter email address"
                    }`}
                    label="Email address"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    inputRef={register({ required: true })}
                    error={!!errors.password}
                    helperText={`${
                      !!errors.password && "Please enter password"
                    }`}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox name="terms" value="1" color="primary" />
                    }
                    label={content["terms"]}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["01_primary-action"]}
                </Button>
              </Box>
              <Box textAlign="right">
                <Link href="#" variant="body2">
                  {content["01_secondary-action"]}
                </Link>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
