import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function ImageUpload() {
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const [inputRef, setInputRef] = useState(null);

  const handleClick = () => {
    inputRef.click();
  };

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <svg
        onClick={handleClick}
        className={classes.add}
        width="20px"
        height="20px"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="#000000"
      >
        <path
          d="M6 12h6m6 0h-6m0 0V6m0 6v6"
          stroke="#000000"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <input
        type="file"
        ref={(ref) => setInputRef(ref)}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      {/* {image && <img src={image} alt="Preview" />} */}
    </div>
  );
}
export default ImageUpload;
const useStyles = makeStyles((theme) => ({}));
