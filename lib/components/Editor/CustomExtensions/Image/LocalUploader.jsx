import React, { useState } from "react";

import Uppy from "@uppy/core";
import { DragDrop, useUppy } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";

import {
  DEFAULT_UPPY_CONFIG,
  UPPY_UPLOAD_CONFIG,
  DEFAULT_UPLOAD_ENDPOINT,
} from "./constants";
import Progress from "./Progress";
import { convertToFileSize } from "./utils";

const LocalUploader = ({
  endpoint = DEFAULT_UPLOAD_ENDPOINT,
  onSuccess,
  uploadConfig,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState("");
  const uppyConfig = { ...DEFAULT_UPPY_CONFIG, ...uploadConfig };

  const uppy = useUppy(() =>
    new Uppy({
      ...uppyConfig,
      onBeforeFileAdded: file => {
        const { maxFileSize, allowedFileTypes } = uppyConfig.restrictions;

        if (file.size > maxFileSize) {
          setError(
            `File size is too large. Max size is  ${convertToFileSize(
              uppyConfig.restrictions.maxFileSize
            )}.`
          );
          return false;
        } else if (!allowedFileTypes.includes(`.${file.extension}`)) {
          setError(
            `File type is not permitted. Allowed file types are: ${allowedFileTypes.join(
              ", "
            )}.`
          );
          return false;
        }

        return true;
      },
    })
      .use(XHRUpload, { endpoint, ...UPPY_UPLOAD_CONFIG })
      .on("upload", () => setIsUploading(true))
      .on("upload-success", (_, response) => onSuccess(response.body.imageURL))
      .on("cancel-all", () => setIsUploading(false))
      .on("complete", () => setIsUploading(false))
  );

  return isUploading ? (
    <Progress uppy={uppy} />
  ) : (
    <div className="caliber-editor-image-uploader__dnd-wrapper">
      <DragDrop
        className="caliber-editor-image-uploader__dnd"
        note={`Max. File Size: ${convertToFileSize(
          uppyConfig.restrictions.maxFileSize
        )}`}
        locale={{
          strings: {
            dropHereOr: "Drop your file(s) here or %{browse}",
            browse: "Browse",
          },
        }}
        uppy={uppy}
        data-cy="caliber-editor-image-local-uploader"
      />
      {error && (
        <p className="caliber-editor-image-uploader__dnd--error">{error}</p>
      )}
    </div>
  );
};

export default LocalUploader;
