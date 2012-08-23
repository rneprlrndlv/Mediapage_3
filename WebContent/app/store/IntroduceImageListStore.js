Ext.define('GNApp.store.IntroduceImageListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'GNApp.model.IntroduceImageListVO'
    ],

    config: {
        autoLoad: true,
        model: 'GNApp.model.IntroduceImageListVO',
        storeId: 'introduceImageListStore',
        proxy: {
            type: 'jsonp',
            url: 'http://gntestserver.appspot.com/imageList.jsp',
            callbackKey:'GNCallBack',
            reader: {
                type: 'json'
            }
        }
    }
});
