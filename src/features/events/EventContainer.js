import React from 'react'
import { Query } from 'react-apollo'
import gql from "graphql-tag";
import EventComponent from './EventComponent'
const EventContainer = () => {
  return (
    <Query query={WP_EVENTS}>
      {
        ({data, loading, error}) => {

          if(loading) return <div> Loading ... </div>
          if(error) return <div> Error ... </div>

          const eventList = data.allEvents.map(event =>
            ({
              title: event.title.rendered,
              locations: event.locations,
              eventUrl: event.acf.event_url,
              eventDescription: event.acf.event_description,
              eventStartDay: event.acf.event_start_day,
              eventStartTime: event.acf.event_start_time,
              eventEndDay: event.acf.event_end_day,
              eventEndTime: event.acf.event_end_time,
              eventBackground: event.acf.event_background,
              eventLogo: event.acf.event_page_hero,
              eventType: event.acf.event_type
            })
          )
          const eventData = {
            pageTitle: data.pageBy[0].title.rendered,
            bgImg: data.pageBy[0].acf.background_image,
            heroImg: data.pageBy[0].acf.hero_image
          }
          return <EventComponent {...eventData} eventList={eventList} />

        }
      }
    </Query>
  )
}

export default EventContainer

const WP_EVENTS = gql`
{
  pageBy(slug: "events"){
    title{
      rendered
    }
    acf{
      background_image
      hero_image
    }
  }

  allEvents{
    id
    title{
      rendered
    }
    locations {
      title {
        rendered
      }
    }
    acf{
      event_url
      event_description
      event_start_day
      event_start_time
      event_end_day
      event_end_time
      event_background
      event_page_hero
      event_type
    }
    locations{
      acf{
        loc_num
      }
    }
  }
}
`