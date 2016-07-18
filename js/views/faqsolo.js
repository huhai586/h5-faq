/**
 * Created by huhai on 2016/7/14.
 */
define(['jquery',
    'backbone',
    'underscore',
    'text!../templates/faqsolo.html',
    '../router/router'

], function ($, Backbone,_, faqSoloTemplate,router) {

    var faqsolo=Backbone.View.extend({
        className:"item-solo",
        template:_.template(faqSoloTemplate),
        render:function(){
            var modelData=this.model.toJSON();
            var html=this.template(modelData);
            this.$el.html(html)
            return this
        },
        events:{
            "click":"navTo"
        },
        navTo:function(){
            var modelCId=this.model.cid;
            router.navigate("faqDetail/"+modelCId,{trigger: true})

        }


    });
    return faqsolo;
});