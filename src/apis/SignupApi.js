import { SoftwrkApi } from "configs/StoreQueryConfig";

const BASE_URL = '/api/v1/clients'

console.log(BASE_URL)

export const SignupApi = SoftwrkApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (config) => ({ url: `${BASE_URL}/signup`,method:'POST', ...config }),
    }),
    
      }),
});

export default SignupApi;
