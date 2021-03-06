import React from "react";

import classnames from "classnames";
import { NavLink } from "react-router-dom";

const noop = () => {};

const TAB_SIZES = { large: "large", default: "default" };

const Tab = ({
  children,
  size,
  noUnderline,
  className = "",
  ...otherProps
}) => (
  <div
    className={classnames(
      {
        "ca-tab__wrapper": true,
      },
      {
        "ca-tab__wrapper--size-large": size === TAB_SIZES.large,
      },
      {
        "ca-tab__wrapper--underline-none": noUnderline,
      },
      [className]
    )}
    data-cy="tab-container"
    {...otherProps}
  >
    {children}
  </div>
);

const Item = ({
  active,
  className = "",
  children,
  icon = null,
  onClick = noop,
  activeClassName = "",
  ...otherProps
}) => {
  let Parent = "button";
  const Icon =
    typeof icon === "string"
      ? () => <i className={icon} data-cy="tab-item-icon" />
      : icon || React.Fragment;

  if (activeClassName) {
    Parent = NavLink;
  }

  return (
    <Parent
      className={classnames(
        ["ca-tab flex select-none items-center justify-center", className],
        {
          active: active,
        }
      )}
      onClick={onClick}
      data-cy="tab-item"
      {...otherProps}
    >
      {icon && <Icon className="ca-tab__icon" />}
      {children}
    </Parent>
  );
};

Tab.Item = Item;

export default Tab;
