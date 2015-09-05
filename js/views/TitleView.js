var TitleView = Backbone.View.extend({
    // designate tag
  el: '<h1>',

  initialize: function() {
    //No child views right now
    this.render();
  },

  //reference the tag made above
  render: function() {
    this.$el.text('How\'s the weather?');
    //"return this" is for chaining but you don't necessarily need it
    return this;
  }

});
