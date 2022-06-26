import React from "react";
import "./FileUploader/FileUploader1.css";
import "./FileUploader/FileUploader3.css";
import "./FileUploader/FileUploader2.css";
import FileUploader1 from "./FileUploader/FileUploader1";

const CoverImage = (props) => {
  const styles = {
    display: props.fileDataURL ? "inline-block" : "none",
  };

  const handleThumbnail = (e) => {
    const file = e.target.files[0];
    props.setThumbImg(file);
    console.log(file);
  };
  return (
    <div className="customize-div">
      <h3>Customize</h3>
      <div className="cover-img">
        <h4>Cover Image</h4>
      </div>
      <div>
        <div className="outer">
          <div className="inner inner-p-i full-width">
            {!props.fileDataURL && (
              <p className="p-2-underline">Upload Image or Video</p>
            )}
            {!props.fileDataURL && (
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
              {props.fileDataURL && (
                <img src={props.fileDataURL} alt="cover-img" />
              )}
            </div>
          </div>
        </div>
      </div>

      <FileUploader1 />
      <hr className="hr" />
    </div>
  );
};

export default CoverImage;
