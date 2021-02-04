import { Box, makeStyles, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((them) => ({
  img: {
    width: "100%",
    borderRadius: "5px",
    [them.breakpoints.down("md")]: {
      width: "50%"
    }
  },
  box: {
    display: "flex",
    justifyContent: "space-evenly"
  }
}));
export default function Profile(props) {
  const classes = useStyles();
  const content = {
    ...props.content
  };
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6} lg={2}>
          <img
            className={classes.img}
            src={content.user?.avatar.url}
            alt={content.user?.name}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container style={{ marginLeft: "10px" }}>
            <Grid item xs={6} md={6} lg={6}>
              <Typography>Full Name</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography> {content.user?.name}</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography> {content.user?.email}</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography>Role</Typography>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <Typography> {content.user?.role}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
