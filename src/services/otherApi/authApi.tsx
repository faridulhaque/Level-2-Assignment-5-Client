import { TWelcomeForm } from "../../types/welcomeTypes";
import { apiSlice } from "../rootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body: TWelcomeForm) => {
        const url = `/api/auth/register`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
    }),

    login: builder.mutation({
      query: (body: TWelcomeForm) => {
        const url = `/api/auth/login`;
        const method = "POST";
        console.log(body);
        return {
          url,
          method,
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
