var CityDataView = function(sectionElement){
  this.sectionElement = sectionElement
}

CityDataView.prototype = {
  populate: function(cityInfo){
    this.clear()
    cityInfo.forEach(function(category){
      var pTag = document.createElement('p')
      pTag.innerText = category.name + ': ' + Math.round(category.score_out_of_10)
      this.sectionElement.appendChild(pTag)
    }.bind(this))
  },

  clear: function(){
    while (this.sectionElement.hasChildNodes()){
      this.sectionElement.removeChild(this.sectionElement.firstChild)
    }
  }
}