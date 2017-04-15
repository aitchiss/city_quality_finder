var CityDataView = function(sectionElement){
  this.sectionElement = sectionElement
  this.series = [{name: this.cityName1, color: 'dodgerblue', data: []}, {name: 'test', color: 'hotpink', data: []}]
  this.categories = []
  this.chart = null
  this.cityName1 = null
  this.cityName2 = null

}

CityDataView.prototype = {
  populate: function(cityInfo1, cityName1, cityInfo2, cityName2){
    this.clear()
    this.cityName1 = cityName1
    this.cityName2 = cityName2
    console.log(cityName2, cityInfo2)
    this.series[0].name = cityName1

    cityInfo1.forEach(function(category){
      this.categories.push(category.name)
      this.series[0].data.push(category.score_out_of_10)
    }.bind(this))

    cityInfo2.forEach(function(category){
      this.series[1].data.push(category.score_out_of_10)
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
        text: 'Quality of life in ' + this.cityName1
      },
      colors: ['dodgerblue', 'hotpink'],
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
    this.series = [{name: this.cityName1, color: 'dodgerblue', data: []}, {name: 'test', color: 'hotpink', data: []}]
  },

}