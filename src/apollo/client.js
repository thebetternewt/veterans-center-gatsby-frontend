import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'
import jwtDecode from 'jwt-decode'
import { AUTH_QUERY } from './queries'

const defaultState = {
  user: null,
  token: null,
  redirectPath: null,
}

export const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  fetch,
  clientState: {
    defaults: defaultState,
  },
})

export const setAuthenticatedUser = token => {
  const userData = jwtDecode(token)
  client.cache.writeData({
    data: {
      user: { __typename: 'user', ...userData },
      token: { __typename: 'token', token },
    },
  })
}

export const getAuthenticatedUser = () => {
  const data = client.readQuery({
    query: AUTH_QUERY,
  })

  if (data) {
    return data.user
  }

  return null
}

export const logOutUser = async () => {
  localStorage.removeItem('token')

  // Reset store
  client.cache.writeData({
    data: {
      user: null,
      token: null,
    },
  })
}
