import { gql } from 'apollo-boost'

export const AUTH_QUERY = gql`
  query AuthQuery {
    user @client {
      name
      email
    }
  }
`

export const TOKEN_QUERY = gql`
  query TokenQuery {
    token @client
  }
`

export const REDIRECT_QUERY = gql`
  query RedirectQuery {
    redirectPath @client
  }
`
