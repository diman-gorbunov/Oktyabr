var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dmitry',
        age: 23,
        job: 'web developer',
        words: 'Hello,World',
    }
});

var person = new Person();

var PeopleCollection = Backbone.Collection.extend({
    model:Person
});

var PeopleView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
        console.log(this.collection);
    },

    render: function() {
        this.collection.each(function(person) {
            var personView=new PersonView({model:person});
            this.$el.append(personView.render().el);

        }, this);
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template('<strong>Меня зовут <%=name%> мне <%=age%> лет моя профессия <%=job%> я говорю <%=words%></strong>'),

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        $(document.body).append(this.el);
    }
});

var peopleCollection = new PeopleCollection([
    {
        name: 'Иван',
        age: 23,
        job: 'Таксист'
    },
    {
        name: 'Анна',
        age: 20,
        job: 'Студентка'
    },
    {
        name: 'Павел',
        job: 'Строитель'
    }
]);

var peopleView = new PeopleView({collection: peopleCollection});