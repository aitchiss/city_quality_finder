var CityDataView = function(sectionElement){
  this.sectionElement = sectionElement
}

CityDataView.prototype = {
  populate: function(cityInfo){
    cityInfo.forEach(function(category){
      var pTag = document.createElement('p')
      pTag.innerText = category.name + ': ' + category.score_out_of_10
      this.sectionElement.appendChild(pTag)
    }.bind(this))
  }
}