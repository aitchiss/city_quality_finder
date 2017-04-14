app = function(){
  
  var cityList = new CityList('https://api.teleport.org/api/urban_areas')
  var citySelectMenu = new CitySelect(document.querySelector('#city-select'))
  var cityStats = new CityStats('https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/scores/')

  //gets the data and populates the select menu
  cityList.getData(function(cities){
    citySelectMenu.populateSelect(cities)

    citySelectMenu.selectContainer.addEventListener('change', function(){
      var selectedCity = this.value
      var url = cities[selectedCity].href
      console.log(url)
    })
  })

  cityStats.getData()
  
  //on select change, grab relevant link from cities and make a request to the API for city stats



  //create the object that can retrieve individual city data
  //add an on change listener within get data call back, that grabs the relevant url and passes to the city data collector
  //give the city data collector a callback to populate the data div

}


window.onload = app