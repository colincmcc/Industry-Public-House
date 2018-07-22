import React from 'react'
import SocialBarComponent from './SocialBarComponent'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';


const SocialContainer = (props) => {
  return (
    <Query query={LOCATIONS} >
    {
      ({data, loading, error}) => {
        if(loading) return <div> Loading...</div>
        if(error) return <div> Error...</div>
        const socialLocations = data.allLocations.map(location => [(
          {
            locName: location.title.rendered,
            locId: location.acf.loc_num,
            tripAdvisor: location.acf.trip_advisor,
            facebook: location.acf.facebook,
            twitter: location.acf.twitter
          }
        )])
        console.log(socialLocations)
        return(
          <SocialBarComponent {...data} />
        )
      }
    }
    </Query>
  )
}

export default SocialContainer

const LOCATIONS = gql`
{
  currentLocation @client
  allLocations{
    id
    title{
      rendered
    }
    acf{
     facebook
     trip_advisor
     twitter
     loc_symbol
     loc_num
     address{
       address
      }
     open_hours
     happy_hour
     phone_number
     email
    }
  }
}`