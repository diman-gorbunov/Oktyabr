var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web developer',
        words: 'Hello,World'
});
var PersonView = Backbone.View.extend({
    tagName: 'li',

    template: _.template('<strong>Меня зовут <%=name%> мне <%=age%> моя профессия <%=job%> я говорю <%=words%></strong>'),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()) + this.mytemplate(this.model.toJSON()));
        $(document.body).append(this.el);
    }
});

var person = new Person;
var personView = new PersonView({model: person});