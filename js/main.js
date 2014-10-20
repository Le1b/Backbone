require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        text: 'libs/text',
        json: 'libs/json'
    }
});

require(['app'], function(App) {

    App.initialize();

//    var Person = Backbone.Model.extend({
//        defaults: {
//            name: 'Le1b',
//            age: 26,
//            job: 'JS Developer'
//        }
//    });
//
//    var PeopleCollection = Backbone.Collection.extend({
//        model: Person
//    });
//
//    var PeopleView = Backbone.View.extend({
//        tagName: 'ul',
//
//        initialize: function () {
////        console.info(this.collection);
//        },
//
//        render: function () {
//            this.collection.each(function (person) {
//                var personView = new PersonView({model: person});
//
//                this.$el.append(personView.render().el);
//            }, this);
//
//            return this;
//        }
//    });
//
//    var PersonView = Backbone.View.extend({
//        tagName: 'li',
//        template: _.template($('#person-id').html()),
//
//        initialize: function () {
//            this.render();
//        },
//
//        render: function () {
//            this.$el.html(this.template(this.model.toJSON()));
//
//            return this;
//        }
//
//    });
//
//    var peopleCollection = new PeopleCollection([
//        {
//            name: 'Ivan',
//            age: 21,
//            job: 'taxi'
//        },
//        {
//            name: 'Anna',
//            age: 18,
//            job: 'student'
//        },
//        {
//            name: 'Sasha',
//            age: 27,
//            job: 'C++ Developer'
//        }
//    ]);
//
//    var peopleView = new PeopleView({collection: peopleCollection});
//
//    $(document.body).append(peopleView.render().el);
});