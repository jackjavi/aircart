import React, { useEffect } from "react";
import "./FileUploader1.css";

const FileUploader1 = () => {
  const [thumbImg, setThumbImg] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState(null);

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbImg(file);
  };

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (thumbImg) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          console.log(result);
        }
      };
      fileReader.readAsDataURL(thumbImg);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [thumbImg]);

  const styles = {
    display: fileDataURL ? "inline-block" : "none",
  };

  const thumbStyles = {
    display: fileDataURL ? "none" : "inline-block",
  };

  return (
    <>
      <div className="cover-img">
        <h4>Thumbnail Image</h4>
      </div>
      <div className="outer">
        <div className="inner inner-p-i">
          <p>Upload Image</p>
          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={handleThumbnail}
          />
        </div>

        <div style={styles} className="inner inner-img">
          {fileDataURL && <img src={fileDataURL} alt="thumbail-img" />}
        </div>
        <div style={thumbStyles} className="thumb-img-text">
          <p>
            Your image should be square, at least 600px600px, and JPG, PNG or
            GIF format.
          </p>
        </div>
      </div>
    </>
  );
};

export default FileUploader1;
