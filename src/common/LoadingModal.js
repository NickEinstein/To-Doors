import { Modal } from "@mui/material";
import LoadingIndicator from "./LoadingIndicator";

/**
 *
 * @param {import("@mui/material").ModalProps} props
 */
export function LoadingModal(props) {
  return (
    <Modal className="flex items-center justify-center" {...props}>
      <LoadingIndicator />
    </Modal>
  );
}

export default LoadingModal;
