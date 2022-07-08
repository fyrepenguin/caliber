import React, { forwardRef } from "react";

import classnames from "classnames";
import ToolTip from "components/Common/ToolTip";
import { Link } from "react-router-dom";

const noop = () => {};
const BUTTON_STYLES = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  text: "text",
  link: "link",
};
const BUTTON_SIZES = { large: "large", default: "default" };
const ICON_POSITIONS = { left: "left", right: "right" };

const Button = forwardRef((props, ref) => {
  const {
    icon = null,
    iconPosition = "right",
    iconSize = 16,
    label = "",
    loading = false,
    onClick = noop,
    to = null,
    type = "button",
    style = "primary",
    fullWidth = false,
    className = "",
    disabled = false,
    size = null,
    href = null,
    tooltipProps = null,
    ...otherProps
  } = props;

  const handleClick = e => {
    if (!loading && !disabled) {
      onClick(e);
    }
  };

  let Parent, elementSpecificProps;
  if (to) {
    Parent = Link;
    elementSpecificProps = { to };
  } else if (href) {
    Parent = "a";
    elementSpecificProps = { href };
  } else {
    Parent = "button";
    elementSpecificProps = {
      type,
    };
  }

  const Icon =
    typeof icon === "string"
      ? () => <i className={classnames("ca-btn__icon", [icon])} />
      : icon || React.Fragment;

  return (
    <ToolTip {...tooltipProps} disabled={!tooltipProps}>
      <Parent
        ref={ref}
        onClick={handleClick}
        className={classnames("ca-btn", [className], {
          "ca-btn--style-primary": style === BUTTON_STYLES.primary,
          "ca-btn--style-secondary": style === BUTTON_STYLES.secondary,
          "ca-btn--style-danger": style === BUTTON_STYLES.danger,
          "ca-btn--style-text": style === BUTTON_STYLES.text,
          "ca-btn--style-link": style === BUTTON_STYLES.link,
          "ca-btn--size-large": size === BUTTON_SIZES.large,
          "ca-btn--width-full": fullWidth,
          "ca-btn--icon-left": iconPosition === ICON_POSITIONS.left,
          "ca-btn--icon-only": !label,
          disabled: disabled,
        })}
        disabled={disabled}
        {...elementSpecificProps}
        {...otherProps}
      >
        {label && <span>{label}</span>}
        {icon ? (
          <Icon key="2" size={iconSize} className="ca-btn__icon" />
        ) : null}
      </Parent>
    </ToolTip>
  );
});

Button.displayName = "Button";
export default Button;
