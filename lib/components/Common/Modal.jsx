import React, { useRef } from "react";

import classnames from "classnames";
import Backdrop from "components/Common/Backdrop";
import Button from "components/Common/Button";
import Portal from "components/Common/Portal";
import useOutsideClick from "hooks/useOutsideClick";
import { useHotkeys } from "react-hotkeys-hook";
import { RiCloseLine } from "react-icons/ri";

const noop = () => {};
const sizes = {
  xs: "xs",
  sm: "sm",
  md: "md",
};

const Modal = ({
  size = "sm",
  isOpen = false,
  onClose = noop,
  loading = false,
  children,
  className = "",
  closeOnEsc = true,
  closeButton = true,
  backdropClassName = "",
  closeOnOutsideClick = true,
  ...otherProps
}) => {
  const modalWrapper = useRef();

  useOutsideClick(modalWrapper, closeOnOutsideClick ? onClose : noop);

  useHotkeys("esc", closeOnEsc ? onClose : noop);

  return (
    <Portal className="ca-portal">
      {isOpen && (
        <Backdrop
          key="modal-backdrop"
          className={classnames("ca-modal__backdrop", backdropClassName)}
        >
          <div
            ref={modalWrapper}
            key="modal-wrapper"
            className={classnames("ca-modal__wrapper", {
              "ca-modal__wrapper--xs": size === sizes.xs,
              "ca-modal__wrapper--sm": size === sizes.sm,
              "ca-modal__wrapper--md": size === sizes.md,
              [className]: className,
            })}
            {...otherProps}
          >
            {closeButton && (
              <Button
                style="text"
                icon={RiCloseLine}
                className="ca-modal__close"
                onClick={onClose}
              />
            )}
            {loading ? "" : children}
          </div>
        </Backdrop>
      )}
    </Portal>
  );
};

export default Modal;
