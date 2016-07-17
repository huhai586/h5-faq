/*global define*/
define([
    'jquery',
    'backbone'

], function ($, Backbone) {
    'use strict';

    var chatRouter = Backbone.Router.extend({
        routes: {
            'faqDetail/:id': 'showDetail',
            '*action':'defaultAction'
        },
        defaultAction:function(){

            loadPage("app");
        },
        showDetail:function(id){
            loadPage("faq-detail",id)
        }
    });


    var prevView;
    function loadPage(name,id){

        if(prevView){
            prevView.$el.html("");
            prevView.$el.off();
            prevView.stopListening();
            prevView.undelegateEvents();

        }
        require(['views/'+name],function(page){
            // prevView= new page();
            if(id){
                prevView= new page({id:"modelCId"+id});

            }else{

                prevView= new page();
            }
        })
    }

    return new chatRouter
});
