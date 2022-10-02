import { useSelector, useDispatch } from "react-redux";
import { toggleLoadingModalAction } from "configs/StoreSliceConfig";

function useLoadingModal() {
  const dispatch = useDispatch();
  const isLoadingModal = useSelector((state) => state.global.isLoadingModal);

  function toggleLoadingModal(payload) {
    dispatch(
      toggleLoadingModalAction(
        typeof payload === "boolean" ? payload : undefined
      )
    );
  }

  return { isLoadingModal, toggleLoadingModal };
}

export default useLoadingModal;
