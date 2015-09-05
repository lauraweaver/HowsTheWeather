var ListView = Backbone.View.extend({
  //if you want a new div that isn't on the page, it is given to you without saying
  //then you can give the implicit div an id
  id: 'list',

  initialize: function() {
    //this is a data driven event
    //same as this.collection.on('add', this.render, this)
    //Hey listen to your collection for an add and then render
    this.listenTo(this.collection, 'add', this.render);
    //this.collection.on('add', this.render, this);
  },

  render: function() {
    //render the list of weathers
    this.$el.empty();

    this.entries = this.collection.models.map(function(model) {
      return new EntryView({
        model: model
      });
    });

    var $els = this.entries.map(function(entry) {
      return entry.$el;
    });

    this.$el.append($els);

    return this;
  }

});
