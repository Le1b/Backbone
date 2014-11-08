define(['jquery', 'underscore', 'backbone', 'json!tabs.json'], function ($, _, Backbone, tabsJSON) {
    var App = {
        Models: {},
        Views: {},
        Collections: {},
        Router: {},

        initialize: function () {
            new App.Router.Dummy();
            Backbone.history.start();
            $(Backbone.history.location.hash).addClass('active');
        }
    };

    App.Models.Dummy = Backbone.Model.extend({
        defaults: {
            id: 'dummyDefault',
            title: 'Dummy Default',
            order: 0,
            path: 'tabs/dummyDefaults.js'
        }
    });

    App.Views.Dummies = Backbone.View.extend({
        $el: $('ul.tabs'),
        render: function () {
            this.collection.each(this.appendOne, this);
            $('.tabs').html(this.el);

            return this;
        },

        appendOne: function (row) {
            this.$el.append(new App.Views.Dummy({model: row}).render().el);
        }
    });

    App.Views.Dummy = Backbone.View.extend({
        initialize: function () {
            this.model.on('change', this.render(), this);
        },
        tagName: 'li',
        render: function () {
            this.$el.html(this.model.get('title'));

            return this;
        },

        events: {
            'click': 'showContent'
        },

        showContent: function () {
            Backbone.history.location.replace('#'+this.model.get('id'));
            $('.tabs li').removeClass('active');
            this.$el.addClass('active');
        }
    });

    App.Collections.Dummy = Backbone.Collection.extend({
        model: App.Models.Dummy
    });

    App.Router.Dummy = Backbone.Router.extend({
        initialize: function () {
            this.appCollection = new App.Collections.Dummy(tabsJSON);
            new App.Views.Dummies({collection: this.appCollection}).render();
        },

        appCollection: {},

        routes: {
            ''          : 'defaultAction',
            ':dummyTable': 'loadTabFile',
            '*actions'  : 'defaultAction'
        },

        defaultAction: function () {
            $('ul.tabs li:first-child').addClass('active');
            this.loadTabFile(this.appCollection.at(0).get('id'));
        },

        loadTabFile: function (url) {

            require(['tabs/' + url], function (Tabs) {
                var tabContent = new Tabs();
                tabContent.render();
                $('.content').html(tabContent.el);
            });
        }
    });

    return App;
});