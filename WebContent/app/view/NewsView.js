var itemFactory = new Array();
var addNewsItem = function(idx){
	var item = {
			xtype : "dataview",
			scrollable : false,
			store: "ItemValues",
			itemTpl : ' <div style="width:300px;text-align:center"><tpl if="xindex=='+idx+'"><img src="{image}" style="width:300px;height:300px;"/></tpl></div>'
	};
	return item;
};/*init carousel page*/ 
for(var idx=1; idx < 6; idx++ ){
	itemFactory.push(addNewsItem(idx));
}

Ext.define("GNApp.view.NewsView", {
	extend : 'Ext.Panel',
	xtype:'newsView',
	config: {
		 title: "소식",
	        iconCls: "",
	        styleHtmlContent: true,
	        scrollable: false,
	    	layout:'vbox',
	        items: [
	         {
	            docked: "top",
	            xtype: "titlebar",
	            title: "소식",
	            items:{
					xtype:'button',
					text:'후원',
					align:'right',
					action:'sponsorship'
						
				}
	        },
	        
	        {
				xtype : 'list',
				flex: 1,
				itemTpl : [
						'<div style="margin: 5px; overflow:hidden; height:80px;">',
						'<div style="float:left"><img src="{image}" /></div> ',
						'<div>{seq}. {name} {content}</div>',
						'</div>' ],
				store : 'ItemValues'
			},
			{
				xtype : "carousel",
				flex : 3,
				id: "introduceCaro2",
				items :  itemFactory,
				listeners:{
					tapstart:{
						fn:function(event){
							var itemLength = Ext.getCmp("introduceCaro2").innerItems.length;
							var storeLength = Ext.getStore("ItemValues").data.length;
							var currentIndex = Ext.getCmp("introduceCaro2").getActiveIndex();
							var cycleItemCount = 0;
							if(itemLength - 2 == currentIndex){
								for(var idx=itemLength+1; idx<=storeLength && cycleItemCount <5; idx++){
									cycleItemCount++;
									Ext.getCmp("introduceCaro2").add(addNewsItem(idx));
								}
							}
						},element:"element"
					}
				}
			}
	       ]
	}
});