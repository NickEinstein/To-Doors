import { useSelector } from "react-redux";

function useAuthUser() {
  return useSelector((state) => state.global.authUser);
}

export default useAuthUser;
