var Person = Backbone.Model.extend({
    defaults: {
        name: 'Dima',
        age: 23,
        job: 'web-developer'
    },

    validate: function(attrs) {
        console.log(attrs);
        if ( attrs.age <= 0 ) {
          return 'Возраст должен быть положительным !';
        }
    }
});