/**
 * Created by huhai on 2016/7/14.
 */
define( [
        'backbone',
        '../models/model',
        "localstorage",
],
    function(Backbone,appModel) {
    var SomeCollection = Backbone.Collection.extend({
        model:appModel,
        localStorage: new Backbone.LocalStorage("D34W") // Unique name within your app.
    });

    return SomeCollection;
});
