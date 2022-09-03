import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
  reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',
         prepareHeaders: (headers, { getState }) => {

            const  token = getState().authSlice.token;

            if (token) {

                headers.set('authorization', `Bearer ${token}`);

                
            }

    return headers
  },
    }),
   tagTypes: ['Contact'],
    endpoints: (builder) => ({
      getContacts: builder.query({
          query: () => `/contacts`,
          providesTags :['Contact'],
      }),
        addContact: builder.mutation({
            query: (value) => ({
                url: '/contacts',
                method: 'POST',
                body:value,
            }),
             invalidatesTags: ['Contact'],
        }),
        removeContact:  builder.mutation({
            query: (id) => ({
                url: `/contacts/${id}`,
                method: 'DELETE',

            }),
             invalidatesTags: ['Contact'],
        }),
        updateContact:builder.mutation({
            query: ({name,number,id}) => ({
                url: `/contacts/${id}`,
                method: 'PATCH',
                body:{name,number},
            }),
             invalidatesTags: ['Contact'],
        }),
  }),
})


export const { useGetContactsQuery, useAddContactMutation, useRemoveContactMutation, useGetContactsByIdQuery, useUpdateContactMutation, } = contactsApi;