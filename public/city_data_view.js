var CityDataView = function(sectionElement){
  this.sectionElement = sectionElement
  this.series = [{name: 'quality rating', data: []}]
  this.categories = []
  this.chart = null
  this.cityName = null

}

CityDataView.prototype = {
  populate: function(cityInfo, cityName){
    this.clear()
    this.cityName = cityName
    cityInfo.forEach(function(category){
      this.categories.push(category.name)
      this.series[0].data.push(category.score_out_of_10)
    }.bind(this))
    this.createChart()
  },

  createChart: function(){
    this.chart = new Highcharts.Chart({
      chart: {
        type: 'column',
        renderTo: this.sectionElement
      },
      title: {
        text: 'Quality of life in ' + this.cityName
      },
      colors: ['hotpink'],
      series: this.series,
      xAxis: {
        categories: this.categories
      }
    })
  },

  clear: function(){
    while (this.sectionElement.hasChildNodes()){
      this.sectionElement.removeChild(this.sectionElement.firstChild)
    }
    this.categories = []
    this.series = [{name: 'quality rating', data: []}]
  },

}