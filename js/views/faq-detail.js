/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    '../collections/collection',
    'text!../templates/faq-detail.html'

], function ($, Backbone,_,faqCollection,faqDetailTem) {

    var app=Backbone.View.extend({
        el:".app",
        template:_.template(faqDetailTem),
        initialize:function(){
         //得到传入的id
         var modelCId=this.id.substr(8);
         var model=faqCollection.get(modelCId);
         //得到数据后渲染
         var modelData=model.toJSON();
          var html=this.template(modelData);
          this.$el.html(html)

        }
    });
    return app;
});