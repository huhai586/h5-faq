/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/app.html',
    '../collections/collection',
    '../views/faqsolo',
    'text!../templates/manual.html',
    'text!../templates/top-faq.html'

], function ($, Backbone,_, homeTemplate,appCollection,faqSolo,manualTem,topFaqTem) {

    var app=Backbone.View.extend({
        el:".app",
        template:_.template(homeTemplate),
        initialize:function(){
            var _this=this;
            this.$el.html(this.template());
            //加载manual及topFaq的模板
            this.$el.append(manualTem);
            this.$el.append(topFaqTem);
            //显示collection里面所有model的数据
            appCollection.models.map(function(model){
                _this.addOne(model)
            })



        },
        addOne:function(curModel){
            var view=new faqSolo({model:curModel})
            var html=view.render().el;
            this.$(".top-faq").append(html)




    },



    })
    return app;
});