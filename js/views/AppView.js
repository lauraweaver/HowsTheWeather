var AppView = Backbone.View.extend({
  //first thing you need to do is designate the tag
  el: '#app',

  //The next thing always; think of it like a constructor.
  initialize: function() {
    //child views should go first and be initialized
    this.title = new TitleView();

    this.input = new InputView({
      //this is the collection that was passed in
      collection: this.collection
    });

    this.list = new ListView({
      collection: this.collection
    });

    this.render();
  },

  render: function() {
    //render the initialized children above
    this.$el.append([
      this.title.$el,
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});
