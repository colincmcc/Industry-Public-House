import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import FooterComponent from './FooterComponent'

const WP_FOOTER = gql`
{
  headers{
    id
  }
}
`
const FooterContainer = () => {
  return (
    <Query query={WP_FOOTER}>
      {(loading, error, data) => (
        <FooterComponent />

      )}

    </Query>
  )
}

export default FooterContainer

