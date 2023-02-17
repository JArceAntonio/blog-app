import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import type {User} from '../../types/User';
import type {Post, Photo} from '../../types/Post';
type UsersResponse = User[];
type PostsResponse = Post[];

export const jsonApi = createApi({
  reducerPath: 'jsonAPi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  tagTypes: ['Users', 'Posts', 'Photos'],
  endpoints: builder => ({
    getUsers: builder.query<UsersResponse, void>({
      query: () => '/users',
      providesTags: result =>
        result ? result.map(({id}) => ({type: 'Users', id})) : [],
    }),
    getPostsByUser: builder.query<PostsResponse, number>({
      query: userId => `/posts?userId=${userId}`,
      providesTags: result =>
        result ? result.map(({id}) => ({type: 'Posts', id})) : [],
    }),
    getPhotoByPost: builder.query<Photo | null, number>({
      query: postId => `/photos/${postId}`,
      providesTags: (result, error, id) => [{type: 'Photos', id}],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetPostsByUserQuery,
  useGetPhotoByPostQuery,
} = jsonApi;
