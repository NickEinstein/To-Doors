import { createSlice } from "@reduxjs/toolkit";
import { logoutAction } from "./StoreActionConfig";
import UserApi from "apis/UserApi";
import SignupApi from "apis/SignupApi";

export const globalInitialState = {
  themeMode: "light", // 'dark'| 'light' | 'media'
  isLoadingModal: false,
  authUser: null,
};

const slice = createSlice({
  name: "global",
  initialState: globalInitialState,
  reducers: {
    toggleLoadingModalAction: (state, { payload }) => {
      state.isLoadingModal =
        payload !== undefined ? !!payload : !state.isLoadingModal;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logoutAction, () => ({ ...globalInitialState }))
      .addMatcher(UserApi.endpoints.login.matchFulfilled, (state, payload) => {
        state.authUser = {
          accessToken: payload.data?.accessToken,
          ...payload.data?.profile,
        };
      })
      .addMatcher(UserApi.endpoints.signup.matchFulfilled, (state, payload) => {
        state.authUser = {
          accessToken: payload.data?.accessToken,
          ...payload.data?.profile,
        };
      }),
});

export const { toggleLoadingModalAction } = slice.actions;

export default slice;

export function getGlobalSliceStorageState({ authUser }) {
  return { authUser };
}
