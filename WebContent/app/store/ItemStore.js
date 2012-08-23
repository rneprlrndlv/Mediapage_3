Ext.define('GNApp.store.ItemStore', {
    extend: 'Ext.data.Store',
    requires: [
        'GNApp.model.ItemVO'
    ],

    config: {
        autoLoad: true,
        model: 'GNApp.model.ItemVO',
        storeId: 'ItemValues',
        proxy: {
            type: 'jsonp',
            url: 'http://gntestserver.appspot.com/pokeList.jsp',
            callbackKey:'GNCallBack',
            reader: {
                type: 'json'
            }
        }
    }
});
