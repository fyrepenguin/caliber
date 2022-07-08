import React, { useState, useEffect } from "react";

import Button from "components/Common/Button";
import { RiCloseLine } from "react-icons/ri";

const Progress = ({ uppy }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    uppy.on("progress", setProgress);
  }, [uppy]);

  const progressPercentage = `${progress}%`;

  return (
    <div className="caliber-editor-image-uploader__progress">
      <p className="caliber-editor-image-uploader__progress-title">
        Uploading...
      </p>
      <p className="caliber-editor-image-uploader__progress-file">
        {uppy.getFiles()[0]?.name}
      </p>
      <div
        className="caliber-editor-progress-bar__wrapper"
        data-cy="caliber-editor-image-upload-progress-bar"
      >
        <div className="caliber-editor-progress-bar__percent">
          <p>{progressPercentage}</p>
          <Button
            icon={RiCloseLine}
            onClick={() => uppy.cancelAll()}
            size="small"
            style="text"
          />
        </div>
        <div className="caliber-editor-progress-bar__indicator">
          <div
            style={{ width: progressPercentage }}
            className="caliber-editor-progress-bar__indicator-inner"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
