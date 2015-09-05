var Weather = Backbone.Collection.extend({
  //this is a reference to the WeatherEntry model
  model: WeatherEntry,
  //method
  addWeatherEntry: function(zipcode) {

    $.get(
      'http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial',
      function(data) {
        //add is a method that will add to the individual models that are a part of the collection
        this.add({
            zipcode: zipcode,
            city: data.name,
            weather: data.main.temp.toFixed(2)
          });
        //if you don't bind it to this, then you will be referencing $
      }.bind(this)
    );
  }

});
