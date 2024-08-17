import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const TOKEN = import.meta.env.VITE_API_KEY
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:import.meta.env.VITE_API_URL ,headers: {Authorization: `Bearer ${TOKEN}`}, }),
    endpoints: builder => ({
        getSearProds : builder.query({
            query : ({query}) => `products?populate=*&filters[Title][$contains]=${query}`
        }),
        getNewProds: builder.query({
            query: ({query}) => `products?populate=*&filters[isNew][$eq]=true&${query}`
        }),
        getProd : builder.query({
            query : ({prodid})=> `products/${prodid}?populate=*`
        }),
        getFeatProds : builder.query({
            query : ({subcat})=> `products?populate=*&filters[subcategories][Title][$eq]=${subcat}` 
        }),
        getCatProds : builder.query({
            query : ({catid,query})=> `products?populate=*&filters[categories][id][$eq]=${catid}&${query}`
        }),
        getCatSubs : builder.query({
            query : ({catid}) => `subcategories?filters[categories][$eq]=${catid}`
        })
    })
})
export const { useGetNewProdsQuery, useGetProdQuery, useGetFeatProdsQuery,useGetSearProdsQuery,useGetCatProdsQuery,useGetCatSubsQuery } = apiSlice