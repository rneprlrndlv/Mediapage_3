Ext.define("GNApp.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
    	fullscreen: true,
        tabBarPosition: 'bottom',
        
        listeners: {
            activeitemchange: function (tabPanel, tab, oldTab) {
            	if("sharemainview" == tab.id){
            		if(flag){
            			initialize();
            		}
            		flag = false;
            	}
            } 
        }
,
        items: [
                {xtype:'introduceView'},
                {xtype:'newsView'},
                {xtype:'mediaView'},
                {xtype:'sharemainview'}
                
        ]
    }
});
