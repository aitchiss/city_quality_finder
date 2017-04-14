app = function(){
  //get data for a city list
  var cityList = new CityList('https://api.teleport.org/api/urban_areas')
  var citySelectMenu = new CitySelect(document.querySelector('#city-select'))

  cityList.getData(function(cities){
    citySelectMenu.populateSelect(cities)
  })
  //display those options in a select menu

}


window.onload = app