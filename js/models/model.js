/**
 * Created by huhai on 2016/7/14.
 */
define(['backbone'],function(Backbone){
    var appModel=Backbone.Model.extend({
     
        defaults:{
            name:'huhai'
        }
    });
    return appModel
})