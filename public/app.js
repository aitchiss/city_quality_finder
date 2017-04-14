app = function(){
  
  var cityList = new CityList('https://api.teleport.org/api/continents/geonames%3AEU/urban_areas/')
  var citySelectMenu = new CitySelect(document.querySelector('#city-select'))
  var cityStats = new CityStats()
  var cityDataView = new CityDataView(document.querySelector('#city-data'))

  //gets the data and populates the select menu
  cityList.getData(function(cities){
    citySelectMenu.populateSelect(cities)
    //adds on change listener which can grab url for more detailed info
    citySelectMenu.selectContainer.addEventListener('change', function(){
      //build a url for more detailed city info, and sends the request to the API
      var cityName = cities[this.value].name

      var url = cities[this.value].href + 'scores'
      cityStats.getData(url, cityName, function(cityInfo){
        //populates the section once cityInfo has been retrieved from API
        cityDataView.populate(cityInfo, cityName)
      })
    })
  })



}


window.onload = app