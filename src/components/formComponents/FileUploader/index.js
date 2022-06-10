import React from "react";

const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;

const FileUploader = () => {
  const [images, setImages] = React.useState([]);

  console.log(images);

  const handleChange = (e) => {
    const { files } = e.target;
    const validImageFiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.match(imageTypeRegex)) {
        validImageFiles.push(file);
      }
    }
    if (validImageFiles.length) {
      setImages(validImageFiles);
      return;
    }
    alert("Selected images are not of valid type!");
  };

  return (
    <div>
      <div class="product-file-div">
        <button class="btn-drag">Drag your file/folder here</button>
        <button class="btn-upload">Upload from your device</button>
        <input
          type="file"
          name="productFile"
          accept="image/*"
          onChange={handleChange}
          className="product-file"
          id="product-file"
        />
      </div>
    </div>
  );
};

export default FileUploader;
