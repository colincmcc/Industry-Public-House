import React from 'react'
import gql from 'graphql-tag'


const WP_FOOTER = gql`

`
const FooterContainer = () => {
  return (
    <Query query={WP_FOOTER}>
      {(loading, error, data) => (
        <div />

      )}

    </Query>
  )
}

export default FooterContainer

