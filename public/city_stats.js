var CityStats = function(){
  this.cityInfo1 = []
  this.cityName1 = null
  this.cityInfo2 = []
}

CityStats.prototype = {
  getData: function(url, cityName, url2, cityName2, callback){
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText
        var cityInfo1 = JSON.parse(jsonString)
        this.cityInfo1 = cityInfo1.categories
        this.cityName1 = cityName
        this.makeSecondRequest(url2, cityName2, callback)
      }
    }.bind(this)
    request.send()
  },

  makeSecondRequest: function(url2, cityName2, callback){
    var newRequest = new XMLHttpRequest()
    newRequest.open('GET', url2)
    newRequest.onload = function(){
      if (newRequest.status === 200){
        var secondJson = newRequest.responseText
        var cityInfo2 = JSON.parse(secondJson)
        this.cityInfo2 = cityInfo2.categories
        callback(this.cityInfo1, this.cityName1, this.cityInfo2, cityName2)
      }
    }.bind(this)
    newRequest.send()
  }
}