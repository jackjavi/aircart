import React, { useEffect } from "react";
import "./FileUploader1.css";
import "./FileUploader3.css";
import "./FileUploader2.css";

const FileUploader3 = () => {
  const [thumbImg, setThumbImg] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState(null);

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    setThumbImg(file);
    console.log(file);
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

  return (
    <>
      <div className="outer">
        <div className="inner inner-p-i full-width">
          {!fileDataURL && (
            <p className="p-2-underline">Upload Image or Video</p>
          )}
          {!fileDataURL && (
            <p className="p-2 ">
              Images should be horizontal, atleast 1280px720px
            </p>
          )}

          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={handleThumbnail}
          />
          <div style={styles} className="cover-img-container">
            {fileDataURL && <img src={fileDataURL} alt="cover-img" />}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUploader3;
