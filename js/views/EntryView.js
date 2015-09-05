var EntryView = Backbone.View.extend({
  //Remember className not class
  className: 'entry',
  //_.template allows token swapping
  template: _.template('<p>It is currently <%= weather %><%= unit %> in <%= city %>.</p>'),

  events: {
    'click': 'clickAction'
  },

  initialize: function() {

    this.listenTo(this.model, 'change', this.render);
    this.render();

  },

  render: function() {

    var entry = this.template({
      //when the entry view was instantiated, it received the model data
      weather: this.model.get('weather'),
      unit: this.model.get('unit'),
      city: this.model.get('city')
    });
    //puts the entry info into the template
    this.$el.html(entry);

  },

  clickAction: function() {

    this.model.toggleUnit();

  }

});
