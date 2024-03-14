import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// AIzaSyAeguCTcDC5vbF0O2dLo4uWl9PyBIaD2hU
export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder) => ({
        register:builder.mutation({
            query: (user) => ({
                url:"accounts:signUp?key=AIzaSyAeguCTcDC5vbF0O2dLo4uWl9PyBIaD2hU",
                method:"POST",
                body:user
            })
        }),
        login:builder.mutation({
            query: (user) => ({
                url:"accounts:signInWithPassword?key=AIzaSyAeguCTcDC5vbF0O2dLo4uWl9PyBIaD2hU",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = authApi