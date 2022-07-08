import React from "react";

const CharacterCount = ({ count, limit, strategy }) => {
  const characterLimitActive = strategy === "limit" && limit;

  return (
    <p
      className="caliber-editor-character-count"
      data-cy="caliber-editor-character-count"
    >
      {characterLimitActive
        ? `${limit - count} characters remaining`
        : `${count} characters`}
    </p>
  );
};

export default CharacterCount;
