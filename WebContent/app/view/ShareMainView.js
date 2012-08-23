Ext.define('GNApp.view.ShareMainView', {
	extend : 'Ext.Panel',
	xtype : 'sharemainview',
	config : {
		title : "나눔",
		iconCls: "user",
		styleHtmlContent: true,
		scrollable : false,
		id : 'sharemainview',
		layout : {
			type : 'vbox'
		},
		items : 
			[
				{
					xtype : 'titlebar',
					//title: '<img src = "resources/hopeforafrica.png" height="50"/>',
					title: "나눔",
					docked : 'top',
				    flex: 1,
				    items :[
				            {	xtype:'button',
								text:'후원',
								align:'right',
								action:'sponsorship'
				            	}
				            ]
				},
				{
					xtype: "sharepanel",
					flex: 3
				},
				{
					xtype: "aboutschooloverlay"
				}
			]
	}

});