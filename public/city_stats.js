var CityStats = function(url){
  this.url = url
  this.cityInfo = []
}

CityStats.prototype = {
  getData: function(){
    var request = new XMLHttpRequest()
    request.open('GET', this.url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText
        var cityInfo = JSON.parse(jsonString)
        this.cityInfo = cityInfo.categories
        console.log(this.cityInfo)
      }
    }.bind(this)
    request.send()
  }
}