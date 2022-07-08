import React, { forwardRef } from "react";

import classnames from "classnames";
import { hyphenize } from "utils/common";

import Label from "./Label";

const Input = forwardRef((props, ref) => {
  const {
    id,
    size = "small",
    type = "text",
    label,
    error = null,
    suffix = null,
    prefix = null,
    disabled = false,
    helpText = "",
    className = "",
    nakedInput = false,
    contentSize = null,
    required = false,
    ...otherProps
  } = props;

  return (
    <div className={classnames(["ca-input__wrapper", className])}>
      {label && (
        <Label
          required={required}
          data-cy={`caliber-editor-${hyphenize(label)}-input-label`}
          htmlFor={id}
        >
          {label}
        </Label>
      )}
      <div
        className={classnames("ca-input", {
          "ca-input--naked": !!nakedInput,
          "ca-input--error": !!error,
          "ca-input--disabled": !!disabled,
          "ca-input--small": size === "small",
        })}
      >
        {prefix && <div className="ca-input__prefix">{prefix}</div>}
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          size={contentSize}
          required={required}
          aria-invalid={!!error}
          data-cy={`${hyphenize(label)}-input-field`}
          {...otherProps}
        />
        {suffix && <div className="ca-input__suffix">{suffix}</div>}
      </div>
      {!!error && (
        <p
          data-cy={`${hyphenize(label)}-input-error`}
          className="ca-input__error"
        >
          {error}
        </p>
      )}
      {helpText && <p className="ca-input__help-text">{helpText}</p>}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
