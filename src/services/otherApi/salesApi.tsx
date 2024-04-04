import { TSaleParam, TSales } from "../../types/salesTypes";
import { apiSlice } from "../rootApi/apiSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        createSale: builder.mutation({
            query: (body:TSales) => {
                const url = `/api/sales/create`;
                const method = "POST";


                return {
                    url,
                    method,
                    body
                };
            },
            invalidatesTags: ["sales"]
        }),

        getSales: builder.query({
            query: (param:TSaleParam) => {
                const url = `/api/sales/${param}`;
                const method = "GET";

                return {
                    url,
                    method,
                };
            },
            providesTags: ['sales']
        }),


       
    }),
});

export const { useCreateSaleMutation, useGetSalesQuery } = authApi;
