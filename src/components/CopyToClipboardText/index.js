import propTypes from "prop-types/prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

export const CopyToClipboardText = ({ text }) => {
  return (
    <Box display="flex" alignItems="center">
      <FileCopyOutlinedIcon fontSize={"small"} />
      <span>{text}</span>
    </Box>
  );
};

CopyToClipboardText.propTypes = {
  text: propTypes.string.isRequired,
};
