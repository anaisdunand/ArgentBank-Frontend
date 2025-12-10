import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/api/v1/"
    }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (credentials) => ({
                url: "user/login",
                method: "POST",
                body: credentials
            })
        }),
        getProfile: builder.query({
            query: (token) => ({
                url: "user/profile",
                method: "GET",
                headers: { Authorization: `Bearer ${token}` }
            })
        }),
        putProfile: builder.mutation({
            query: ({ token, updatedData }) => ({
                url: "user/profile",
                method: "PUT",
                headers: { Authorization: `Bearer ${token}` },
                body: updatedData
            })
        })
    })
})

export const { usePostLoginMutation, useLazyGetProfileQuery, usePutProfileMutation } = api