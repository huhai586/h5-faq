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
        model:appModel

    });

    return new SomeCollection;
});
