import React from "react";
import TapList from "../../common/components/digitalPour/TapList";

const DrinkMenuContainer = props => {
  if (props.drinkMenu == "taps") return <TapList taps={props.data.allTaps} />;
  if (props.drinkMenu == "cocktails") return null;
  if (props.drinkMenu == "bottles") return null;
  if (props.drinkMenu == "whiskey") return null;
  if (props.drinkMenu == "premium") return null;
  if (props.drinkMenu == "wine") return null;
};

export default DrinkMenuContainer;
