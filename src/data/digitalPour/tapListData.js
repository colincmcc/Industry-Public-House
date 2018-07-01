
tapList = (dpJson) => {

  const tapListArray = dpJson.map ((dpJson) => {

    item_name = dpJson['MenuItemDisplayDetail']['DisplayName'];
    producer_name = dpJson['MenuItemProductDetail']['FullProducerList'];
    beverage_name = dpJson['MenuItemProductDetail']['BeverageNameWithVintage'];
    beverage_style = dpJson['MenuItemProductDetail']['FullStyleName'];
    beverage_color = dpJson['MenuItemProductDetail']['Beverage']['StyleColor'];
    year = dpJson['MenuItemProductDetail']['Year'];
    beverage_abv = dpJson['MenuItemProductDetail']['Beverage']['Abv'];
    beverage_type = dpJson['MenuItemProductDetail']['BeverageType'];
    producer_location = "";
    producer_url = "";
    switch(beverage_type) {
        case "Beer":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['Brewery']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['Brewery']['BreweryUrl'];
            break;
        case "Cider":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['Cidery']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['Cidery']['CideryUrl'];
            break;
        case "Mead":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['Meadery']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['Meadery']['MeaderyUrl'];
            break;
        case "Wine":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['Winery']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['Winery']['WineryUrl'];
            break;
        case "Kombucha":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['KombuchaMaker']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['KombuchaMaker']['Url'];
            break;
        case "Soft Drink":
            producer_location = dpJson['MenuItemProductDetail']['Beverage']['SoftDrinkMaker']['Location'];
            producer_url = dpJson['MenuItemProductDetail']['Beverage']['SoftDrinkMaker']['Url'];
            break;
    }
    date_put_on = dpJson['DatePutOn'];
    bottle_size = dpJson['MenuItemProductDetail']['Prices'][0]['Size'];
    bottle_price = dpJson['MenuItemProductDetail']['Prices'][0]['Price'];
    beverage_ps = dpJson['MenuItemProductDetail']['Prices'][0]['DisplayName'];
    in_bottles = dpJson['MenuItemProductDetail']['AvailableInBottles'];
    keg_size = dpJson['MenuItemProductDetail']['KegSize'];
    oz_remaining = dpJson['MenuItemProductDetail']['EstimatedOzLeft'];
    scale = 1.0; //


  //calculating percentage of keg remaining
  // Get Percentage out of 100
  if ( !empty(keg_size) ) { percent = oz_remaining  / keg_size; }
  else { percent = 0; }

  // Limit to 100 percent (if more than the max is allowed)
  if ( percent > 1 ) { percent = 1; }
  if ( percent < 0 ) { percent = .005; }
  percent_remaining = number_format(percent*100, 0);
  if ( percent_remaining < 1 ) {percent_remaining = "< 1";}

  //determine percent Left color
  //                  |-----------Red ---------------------------|   |-------Green--------------------| |Blue|
  percent_left_color = (max(0,min(255,511 * (1-percent))) * 65536) + (max(0,min(255,511 * percent)) * 256) + 40;

  })

  return tapListArray
}