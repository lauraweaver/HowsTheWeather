var InputView = Backbone.View.extend({

  tagName: 'input',
  // el: '<input>', el is good for elements that are already on the page

  //This is for user input or DOM interaction
  events: {
    'keydown': 'keyAction', //keyaction is a method below
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.resetInput();
    return this;
  },

  keyAction: function(e) {
    //bar ENTER_KEY = 13 this was mapped on the backend
    var isEnterKey = (e.which === 13);

    if(isEnterKey && !this.$el.val().trim().match(/^(?=.*[0-9].*)[0-9]{5}$/)) {

      this.$el.attr({
        placeholder: 'Sorry, zip code invalid.'
      });
      this.clearInput();

    } else if(isEnterKey) {

      this.collection.addWeatherEntry(this.$el.val());
      this.resetInput();

    }

  },

  resetInput: function() {
    this.$el.attr({
      placeholder: 'Enter a zip code'
    });
    this.clearInput();
  },

  clearInput: function() {
    this.$el.val('');
  }

});
