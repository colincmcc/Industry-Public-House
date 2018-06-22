import React from "react";
import shortid from "shortid";

const FoodComponent = props => {
  return (
    <div>
      {props.foods.map(page => (
        <div id={page.node.title} key={shortid.generate}>
          <h2 dangerouslySetInnerHTML={{ __html: page.node.title }} />
          <p dangerouslySetInnerHTML={{ __html: page.node.content }} />
        </div>
      ))}
    </div>
  );
};

export default FoodComponent;
