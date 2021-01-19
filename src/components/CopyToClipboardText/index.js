import propTypes from "prop-types/prop-types";
import Box from "@material-ui/core/Box";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useCopyToClipboard } from "react-use";

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

export const CopyToClipboardText = ({ text }) => {
  const classes = useStyles();
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <Box
      display="flex"
      onClick={() => {
        copyToClipboard(text);
      }}
      alignItems="center"
      className={classes.root}
      title={state.value ? "Copied" : "Copy"}
    >
      <FileCopyOutlinedIcon fontSize="small" className={classes.icon} />
      {text}
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text: propTypes.string.isRequired,
};
