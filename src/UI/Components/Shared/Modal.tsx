import { XCircleIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactNode, memo } from "react";
import { createPortal } from "react-dom";

interface IProps {
  isOpen: boolean;
  closerFunction?: () => void;
  title?: string;
  children?: ReactNode;
}

const Modal = ({
  isOpen,
  children,
  closerFunction,
  title = "Title",
}: IProps) => {
  if (!isOpen) return null;

  return createPortal(
    <Fragment>
      <div
        className="backdrop"
        onClick={closerFunction}
      ></div>
      <div className="modal">
        <div className="modal__header">
          <h2 className="title">{title}</h2>
          <button onClick={closerFunction}>
            <XCircleIcon className="icon close" />
          </button>
        </div>
        {children}
      </div>
    </Fragment>,
    document.querySelector("#portal") as HTMLDivElement
  );
};

export default memo(Modal);
