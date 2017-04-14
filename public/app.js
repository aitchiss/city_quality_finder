app = function(){
  
  var cityList = new CityList('https://api.teleport.org/api/urban_areas')
  var citySelectMenu = new CitySelect(document.querySelector('#city-select'))
  var cityStats = new CityStats()
  var cityDataView = new CityDataView(document.querySelector('#city-data'))

  //gets the data and populates the select menu
  cityList.getData(function(cities){
    citySelectMenu.populateSelect(cities)

    citySelectMenu.selectContainer.addEventListener('change', function(){
      var url = cities[this.value].href + 'scores'
      cityStats.getData(url, function(cityInfo){
        cityDataView.populate(cityInfo)
      })
    })
  })

  
  
  //on select change, grab relevant link from cities and make a request to the API for city stats



  //create the object that can retrieve individual city data
  //add an on change listener within get data call back, that grabs the relevant url and passes to the city data collector
  //give the city data collector a callback to populate the data div

}


window.onload = app