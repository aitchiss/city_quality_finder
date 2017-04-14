app = function(){
  //get data for a city list
  var cityList = new CityList('https://api.teleport.org/api/urban_areas')
  cityList.getData()
  //display those options in a select menu
}


window.onload = app