var CityList = function(url){
  this.url = url
  this.cities = []
}

CityList.prototype = {
  getData: function(callback){
    var request = new XMLHttpRequest()
    request.open('GET', this.url)
    request.onload = function(){
      if (request.status === 200){
        var jsonString = request.responseText
        var cityInfo = JSON.parse(jsonString)
        this.cities = cityInfo._links['ua:item']
      }

      callback(this.cities)
    }.bind(this)
    request.send()
  }
}