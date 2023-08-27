import { Button } from "@mui/material";

const ImageButton = ({ text, hidden, onChange, ...other }) => {
  return (
    <Button variant="contained" size="medium" component="label" {...other}>
      {text}
      <input
        className="image-input"
        type="file"
        hidden={hidden}
        onChange={onChange}
      />
    </Button>
  );
};

export default ImageButton;
