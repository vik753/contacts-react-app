import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";

import { useContacts } from "./useContacts";
import { ContactsTable } from "./ContactsTable";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    backgroundColor: theme.color,
  },
  titleContainer: {
    marginBottom: theme.spacing(3),
  },
}));

export const Contacts = () => {
  const classes = useStyles();

  const { data, isLoading, isError } = useContacts();

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item xs={10} className={classes.titleContainer}>
          <Typography variant="h4">Contacts</Typography>
        </Grid>
        <Grid item xs={12}>
          {isLoading && (
            <Typography variant="button">
              <div>Loading...</div>
              <LinearProgress />
            </Typography>
          )}
          {isError && <Typography variant="button">...error</Typography>}
          {!isLoading && !isError && <ContactsTable data={data} />}
        </Grid>
      </Grid>
    </Container>
  );
};
