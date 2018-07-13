import composeWithJson from 'graphql-compose-json'
import fetch from 'node-fetch';


const restApiResponse = {

    id: 41,
    status: "publish",
    acf: {
      review_source: "Trip Advisor",
      source_link: "https://www.tripadvisor.com/ShowUserReviews-g53449-d10065653-r578623626-Industry_Public_House-Pittsburgh_Pennsylvania.html#",
      review_snippet: "very expansive CRAFT Beer and ",
      full_review: "Found this spot near our overnight Hotel. Sta",
      review_date: "05/2018",
      review_topic: [
          "Drink",
          "NF"
      ],
      review_author: "Name"
  },
}

export const ReviewTC = composeWithJson('Review', restApiResponse)
export const ReviewGraphQLType = ReviewTC.getType()

export function getReviewResolvers(baseUrl){
    return {
      reviewsBy: {
        type: [ReviewTC],
        args: {
          review_source: `String`,
          id: `Int`,
        },
        resolve: (_, args) => {
          if(args.review_source != null){
            return fetch(`${baseUrl}/acf/v3/review?review_source=${args.review_source}`).then(r => r.json())
          }
          if(args.id != null){
            return fetch(`${baseUrl}/acf/v3/review/${args.id}`).then(r => [r.json()])
          }
        }
      },
          allReviews: {
            type: [ReviewTC],
            resolve: () =>
              fetch(`${baseUrl}/wp/v2/review/`).then(r => r.json()),
          }
    }

}