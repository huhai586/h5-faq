/**
 * Created by huhai on 2016/7/14.
 */
define( [
        'backbone',
        '../models/model'
],
    function(Backbone,appModel) {
    var SomeCollection = Backbone.Collection.extend({
        url:"/",
        model:appModel,
        initialize:function(){
            //获取数据
            this.add(faqs);
        }
    });

    return new SomeCollection;
});
