import React from "react";
import FileUploader1 from "./FileUploader/FileUploader1";
import FileUploader2 from "./FileUploader/FileUploader2";

const CoverImage = () => {
  return (
    <div className="customize-div">
      <h3>Customize</h3>
      <div className="cover-img">
        <h4>Cover Image</h4>
      </div>
      <FileUploader2 />
      <FileUploader1 />
      <hr className="hr" />
    </div>
  );
};

export default CoverImage;
