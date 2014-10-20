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

});