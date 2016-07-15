/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/app.html',
    '../collections/collection',

], function ($, Backbone,_, _homeTemplate,appCollection,modelSolo) {

    var app=Backbone.View.extend({
        el:".app",
        initialize:function(){
            this.$el.html("app里面的内容");
            var c=new appCollection;
            this.listenTo(c,"add",this.addOne)
            this.listenTo(c,"change",this.showChange)
            c.fetch()
            c.create({name:"123"})
            c.create({name:"huhai"})

            //c.save()

        },
        addOne:function(model){
            var modelData=model.toJSON();
            if(modelData.name=='huhai'){
                model.set({name:"huhai-refreash"})
            }

    },
        showChange:function(model){
        console.log("检测到变化",model.toJSON())
    }


    })
    return app;
});