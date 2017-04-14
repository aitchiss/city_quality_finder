var CitySelect = function(selectContainer){
  this.selectContainer = selectContainer
}

CitySelect.prototype = {
  populateSelect: function(cities){
    cities.forEach(function(city, index){
      var option = document.createElement('option')
      option.value = index
      option.text = city.name

      this.selectContainer.appendChild(option)
    }.bind(this))
  }
}