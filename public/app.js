app = function(){
  
  var cityList = new CityList('https://api.teleport.org/api/continents/geonames%3AEU/urban_areas/')
  var citySelectMenu = new CitySelect(document.querySelector('#city-select'))
  var cityStats = new CityStats()
  var cityDataView = new CityDataView(document.querySelector('#city-data'), 'blue')

  var cityToCompareMenu = new CitySelect(document.querySelector('#city-comparison-select'))
  var comparisonCityDataView = new CityDataView(document.querySelector('#city-to-compare'), 'hotpink')

  var compareBtn = document.querySelector('#compare-btn')

  
  cityList.getData(function(cities){
    citySelectMenu.populateSelect(cities)
    cityToCompareMenu.populateSelect(cities)

    compareBtn.addEventListener('click', function(){
      var cityName1 = cities[citySelectMenu.selectContainer.value].name
      var cityName2 = cities[cityToCompareMenu.selectContainer.value].name

      var url1 = cities[citySelectMenu.selectContainer.value].href + 'scores'
      var url2 = cities[cityToCompareMenu.selectContainer.value].href + 'scores'

      cityStats.getData(url1, cityName1, url2, cityName2, function(cityInfo1, cityName1, cityInfo2, cityName2){
        cityDataView.populate(cityInfo1, cityName1, cityInfo2, cityName2)
      })
    })
   
  })

}


window.onload = app