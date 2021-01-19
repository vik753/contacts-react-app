import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { format, parseISO } from "date-fns";
import { CopyToClipboardText } from "../../../components/CopyToClipboardText";

const useStyles = makeStyles((theme) => ({
  table: {},
  head: {
    backgroundColor: "#f5f5f5",
  },
  titleCell: {
    padding: "8px 8px 8px 15px",
  },
}));

export const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.titleCell}>Avatar</TableCell>
            <TableCell className={classes.titleCell}>Full name</TableCell>
            <TableCell className={classes.titleCell}>Birthday</TableCell>
            <TableCell className={classes.titleCell}>Email</TableCell>
            <TableCell className={classes.titleCell}>Phone</TableCell>
            <TableCell className={classes.titleCell}>Location</TableCell>
            <TableCell className={classes.titleCell}>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.login.uuid}>
              <TableCell component="th" scope="row">
                <Avatar alt="user name" src={item.picture.thumbnail} />
              </TableCell>
              <TableCell>
                {item.name.title} {item.name.first} {item.name.last}
              </TableCell>
              <TableCell>
                {format(parseISO(item.dob.date), "EEEE, Pp")}, {item.dob.age}{" "}
                years
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={item.phone} />
              </TableCell>
              <TableCell>
                <b>/{item.location.country}/</b>
                <br />
                {item.location.street.number} {item.location.street.name},{" "}
                {item.location.city}, {item.location.country}{" "}
                {item.location.postcode}
              </TableCell>
              <TableCell>7</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
