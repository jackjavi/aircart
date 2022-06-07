import React, { useEffect } from "react";

const CoverImage = () => {
  const [coverImg, setCoverImg] = React.useState(null);
  const [thumbImg, setThumbImg] = React.useState(null);
  const [fileDataURL, setFileDataURL] = React.useState(null);

  console.log(coverImg);

  const handleChange = (e) => {
    const file = e.target.files[0];
    setCoverImg(file);
  };

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

  const thumbStyle = {
    opacity: thumbImg ? "0" : "1",
  };

  return (
    <div className="customize-div">
      <h3>Customize</h3>
      <div className="cover-img">
        <h4>Cover Image</h4>
        <div class="product-file-div">
          <button class="btn-drag">Drag your file/folder here</button>
          <button class="btn-upload">
            Images should be horizontal, at least 1280x720x
          </button>
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
      <div className="thumbnail-img">
        <h4>Thumbnail Image</h4>
        <div className="input-file">
          <div>
            <button>Upload Image</button>
            <input
              type="file"
              name="thumbnailImage"
              onChange={handleThumbnail}
            />
            <div className="thumbnail-preview">
              {fileDataURL ? (
                <p className="img-preview-wrapper">
                  {<img src={fileDataURL} alt="preview" />}
                </p>
              ) : null}
            </div>
          </div>

          <p style={thumbStyle}>
            Your image should be square, atleast 600x600px, and JPG, PNG, or GIT
            FORMAT
          </p>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default CoverImage;
