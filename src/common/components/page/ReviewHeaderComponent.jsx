import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import theme from "../../styled/theme";

const ReviewHeaderComponent = props => {
  return (
    <PageHeaderWrapper bgImg={props.bgImg}>
      <BGOverlay />
      <PageHeadContent>
        <PageHeading>{props.heading} </PageHeading>

        <PageSubHeading>
          <Review>{`"${props.review.acf.review_snippet}"`}</Review>
          {/**
             * *Seems Cluttered with this.

              <Author>{`- ${props.review.acf.review_author} on ${
                props.review.acf.review_date
              }`}</Author>
          */}

          <Button
            onClick={() => window.open(props.review.acf.source_link, "_blank")}
            variant="outlined"
            style={{ color: theme.colors.lightAccent }}
          >
            Read Review
          </Button>
        </PageSubHeading>
      </PageHeadContent>
    </PageHeaderWrapper>
  );
};

export default ReviewHeaderComponent;

const PageHeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  background-image: url(${props => props.bgImg});
  background-position: center;
  background-size: cover;
  height: 85vh;
  width: 100%;
  overflow: hidden;
  z-index: -2;
`;
const BGOverlay = styled.div`
  width: 100%;
  height: 85vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgb(17, 12, 2, 0.6);
`;
const PageHeadContent = styled.div`
  margin: auto;
  max-width: 720px;
  z-index: 2;
`;

const PageHeading = styled.div`
  ${props => props.theme.components.heading};
`;
const PageSubHeading = styled.div`
  ${props => props.theme.components.subheading};
  color: ${props => props.theme.colors.whiteTheme};
  cursor: pointer;
  padding: 3em;
  max-width: 500px;
`;
const Review = styled.p`
  font-style: italic;
`;
const Author = styled.div`
  padding: 8px;
`;
const ReviewLink = styled.div``;
