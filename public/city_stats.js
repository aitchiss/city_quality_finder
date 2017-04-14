var CityStats = function(){
  this.cityInfo = []
}

CityStats.prototype = {
  getData: function(url, callback){
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText
        var cityInfo = JSON.parse(jsonString)
        console.log(cityInfo)
        this.cityInfo = cityInfo.categories
        callback(this.cityInfo)
      }
    }.bind(this)
    request.send()
  }
}