import { TGadget } from "../../types/addGadgetTypes";
import { TGadgetUpdate } from "../../types/updateGadgetTypes";
import { apiSlice } from "../rootApi/apiSlice";

const gadgetApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllGadgets: builder.query({
      query: () => {
        const url = `/api/gadget/all`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["gadgets", "sales"],
    }),

    getFilteredGadget: builder.query({
      query: (query:string) => {
        const url = `/api/gadget/filter${query}`;
        const method = "GET";
        return {
          url,
          method,
        };
      },
      providesTags: ["gadgets"],
    }),


    getGadgetFilterValues: builder.query({
      query: () => {
        const url = "/api/gadget/filter-values";
        const method = "GET";
        return {
          url,
          method,
        };
      },
      providesTags: ["gadgets"],
    }),

    getOneGadget: builder.query({
      query: (id: string) => {
        const url = `/api/gadget/${id}`;
        const method = "GET";

        return {
          url,
          method,
        };
      },
      providesTags: ["gadgets"],
    }),

    createGadget: builder.mutation({
      query: (body: TGadget) => {
        const url = `/api/gadget/create`;
        const method = "POST";

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["gadgets"],
    }),

    updateGadget: builder.mutation({
      query: (body: TGadgetUpdate) => {
        const url = `/api/gadget/update/${body?.id}`;
        const method = "PUT";

        delete body.id;

        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["gadgets"],
    }),

    deleteGadget: builder.mutation({
      query: (id: string) => {
        const url = `/api/gadget/delete/${id}`;
        const method = "PUT";

        return {
          url,
          method,
        };
      },
      invalidatesTags: ["gadgets"],
    }),

    deleteManyGadget: builder.mutation({
      query: (data: string[]) => {
        const url = "/api/gadget/delete-many";
        const method = "PUT";
        return {
          url,
          method,
          body: data,
        };
      },
      invalidatesTags: ["gadgets"],
    }),
  }),
});

export const {
  useCreateGadgetMutation,
  useUpdateGadgetMutation,
  useGetAllGadgetsQuery,
  useDeleteGadgetMutation,
  useDeleteManyGadgetMutation,
  useGetOneGadgetQuery,
  useGetGadgetFilterValuesQuery,
  useGetFilteredGadgetQuery
} = gadgetApi;
