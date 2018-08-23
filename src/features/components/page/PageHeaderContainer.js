import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ReviewHeaderComponent from './ReviewHeaderComponent';
import SimpleHeaderComponent from './SimpleHeaderComponent';
import LoadingComponent from '../loading/LoadingComponent';
import ErrorComponent from '../loading/ErrorComponent';

const REVIEWS = gql`
  {
    allReviews {
      id
      acf {
        review_source
        source_link
        review_snippet
        review_date
        review_topic
        review_author
      }
    }
  }
`;
const PageHeaderContainer = (props) => {
  const { review } = props;
  if (review) {
    return (
      <Query query={REVIEWS}>
        {({ data, loading, error }) => {
          if (loading) return <LoadingComponent />;
          if (error) return <ErrorComponent />;

          // *Filter reviews based on the relevance to the page and then get one random review from that array
          let relevantReviews;
          const getReviews = type => element => element.acf.review_topic.includes(type);

          if (props.heading === 'Drinks') {
            relevantReviews = data.allReviews.filter(getReviews('Drink'));
          } else if (props.heading === 'Food') {
            relevantReviews = data.allReviews.filter(getReviews('Food'));
          } else {
            relevantReviews = data.allReviews;
          }
          const randomReview = relevantReviews[Math.floor(Math.random() * relevantReviews.length)];
          return <ReviewHeaderComponent {...props} review={randomReview} />;
        }}
      </Query>
    );
  }

  return <SimpleHeaderComponent {...props} />;
};

export default PageHeaderContainer;
