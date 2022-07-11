import React, { useState } from "react";

import Button from "components/Common/Button";
import Input from "components/Common/Input";

const ImageEditor = ({ url, editor, onClose, alt, caption }) => {
  const [altText, setAltText] = useState(alt || "");
  const [captionText, setCaptionText] = useState(caption || "");

  const handleSubmit = () => {
    editor
      .chain()
      .focus()
      .setImage({ src: url, alt: altText, caption: captionText })
      .run();
    onClose();
  };

  const handleKeyDown = event => {
    event.key === "Enter" && handleSubmit();
  };

  return (
    <div className="caliber-editor-image-editor" onKeyDown={handleKeyDown}>
      <img src={url} />
      <Input
        value={captionText}
        onChange={e => setCaptionText(e.target.value)}
        placeholder="Caption the Image or add attribution"
        label="Caption"
      />
      <Input
        value={altText}
        onChange={e => setAltText(e.target.value)}
        placeholder="Brand Image"
        label="Alt Text"
      />
      <div className="caliber-editor-image-editor__footer">
        <Button label="Save Changes" onClick={handleSubmit} />
        <Button label="Cancel" style="text" onClick={onClose} />
      </div>
    </div>
  );
};

export default ImageEditor;
