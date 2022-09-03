import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({


    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://connections-api.herokuapp.com',

        prepareHeaders: (headers, { getState }) => {

            const token = getState().authSlice.token;


            if (token) {

                headers.set('authorization', `Bearer ${token}`);

                
            }

            return headers
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (values) => ({
                url: `/users/signup`,
                method: 'POST',
                body: values,
                providesTags: ['User'],

            }),
        }),
        logIn: builder.mutation({
            query: (values) => ({
                url: `/users/login`,
                method: 'POST',
                body: values,
                providesTags: ['User'],

            }),
            
        }),
        logOut: builder.mutation({
            query: () => ({
                url: `/users/logout`,
                method: 'POST',
                providesTags: ['User'],

            }),

        }),
        fetchCurrentUser: builder.query({
            query: () => ({
                url: `/users/current`,
                providesTags: ['User'],
            })
            
        }),
    })
})

export const {useRegisterMutation,useLogInMutation,useLogOutMutation,useFetchCurrentUserQuery } = authApi;
