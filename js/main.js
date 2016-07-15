/**
 * Created by huhai on 2016/7/14.
 */
require.config({

    paths: {
        jquery: '../node_modules/jquery/jquery',
        underscore: '../node_modules/underscore/underscore',
        backbone: '../node_modules/backbone/backbone',
        text: '../node_modules/requirejs-text/text',
        bootstrap:'../node_modules/bootstrap/dist/js/bootstrap',
        localstorage:'../node_modules/backbone.localstorage/backbone.localStorage',

    },
    shim:{
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap:{
            deps:['jquery']
        }

    }
});

require(['views/app'],function(begin){
   new begin
});