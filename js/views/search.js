/**
 * Created by huhai on 2016/7/14.
 */


define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/app.html',
    '../collections/search-collection',
    '../views/faqsolo',
    'text!../templates/manual.html',
    'text!../templates/top-faq.html'

], function ($, Backbone,_, homeTemplate,searchCollection,faqSolo,manualTem,topFaqTem) {

    var search=Backbone.View.extend({
        el:".search-end",
        template:_.template(homeTemplate),
        initialize:function(){
            var _this=this;
           //只要监听到collection reset，就清空dom
            this.listenTo(searchCollection,"reset",this.clear);
            this.listenTo(searchCollection,"add",this.addOne);
            //向外暴露的接口

            window.search={
                showResult:_this.showResult,
                leaveSearch:_this.leaveSearch
            }



        },
        showResult:function(jsonString){
            //隐藏app界面
            $(".app").hide();

            var jsonData=jsonString.parse();
            var end=jsonData.end;
            //searchCollection.reset();
            //searchCollection.add(end);
            //直接使用模板进行数据展示，不依赖collection

        },
        leaveSearch:function(){
            $(".search-end").hide();
            //显示app
            $(".app").show()


        },
        addOne:function(curModel){
            var view=new faqSolo({model:curModel})
            var html=view.render().el;
            this.$(".top-faq").append(html)
    },
        clear:function(){
            this.$el.html("")
        }



    })
    return search;
});