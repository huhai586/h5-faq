/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/app.html',
    '../collections/collection',

], function ($, Backbone,_, _homeTemplate,appCollection) {

    var app=Backbone.View.extend({
        className:".model-solo",
        initialize:function(){
            this.$el.html("app里面的内容");
            var c=new appCollection;
            this.listenTo(c,"add",this.addOne)
            c.fetch()
            //c.create({name:"123"})
            //c.save()

        },
        addOne:function(model){
       //显示每一个model
            console.log(model.toJSON())

    }


    })
    return app;
});