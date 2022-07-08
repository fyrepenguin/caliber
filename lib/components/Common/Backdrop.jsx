import React from "react";

import classNames from "classnames";

const Portal = ({ children, className, ...otherProps }) => (
  <div
    className={classNames("ca-backdrop", {
      [className]: className,
    })}
    {...otherProps}
  >
    {children}
  </div>
);

export default Portal;
