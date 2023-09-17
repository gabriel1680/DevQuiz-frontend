import "./style.css";

function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="app-modal">
      <div className="app-modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

type ModalProps = {
  children: JSX.Element;
  onClose: () => void;
};

export default Modal;
