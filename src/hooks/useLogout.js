import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "configs/StoreActionConfig";

function useLogout(props) {
  const dispatch = useDispatch();

  const logout = useCallback(
    function logout() {
      return dispatch(logoutAction());
    },
    [dispatch]
  );

  return { logout };
}

export default useLogout;
