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

        },
        events:{
            'click .faq-title':"showFAQcontent"
        },
        showFAQcontent:function(e){
            //折叠所有content
            //this.$(".faq-content").hide();
           var faqContent= $(e.target).parent().next();
            //获取当前点击的索引值
            var index=$(e.target).index();
            //将所有的active取消
            $(".faq-content").removeClass("active");
            //当前的添加active
            faqContent.addClass("active");
            //所有的非active折叠
            $(".faq-content").not(".active").slideUp(230)
            //判断当前状态，
            //faqContent.toggle();
            var isShow=faqContent.is(":visible")
            if(isShow){
                faqContent.slideUp(230)
            }else{
                faqContent.slideDown(230)
            }

        }
    });
    return app;
});