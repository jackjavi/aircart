import React, { useEffect } from "react";
import "./FileUploader1.css";
import "./FileUploader3.css";

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
      <label htmlFor="product-file" className="product-file-label">
        Add your file
      </label>
      <div className="outer">
        <div className="inner inner-p-i full-width">
          <p className="p-1">Drag your file/folder here</p>
          <p className="p-2-2">Upload from your device</p>
          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={handleThumbnail}
          />
          <div style={styles} className="inner inner-img">
            {thumbImg && (
              <div>
                <span>Name: {thumbImg.name}</span>
                <span>Type: {thumbImg.type}</span>
                <span>Size: {thumbImg.size / 1000000}MBs</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUploader3;
