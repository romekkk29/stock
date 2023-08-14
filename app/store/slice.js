

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const stockApi=createApi({
    reducerPath:'stockApi',
    refetchOnFocus: true,
    baseQuery:fetchBaseQuery({
        baseUrl:'https://back-chat-innovasoft.herokuapp.com/'
    }),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query: ()=>'stock',
            refetchOnMount: true,
        }),
        getMovements:builder.query({
            query: ()=>'movimiento',
            refetchOnMount: true,

        }),
        addMovement:builder.mutation({
            query: (body)=>({
            url:'createmovimiento',
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(body)
        })})
        })
})


export const {useGetProductsQuery,useGetMovementsQuery,useAddMovementMutation}=stockApi