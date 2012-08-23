Ext.define("GNApp.view.AboutSchoolOverlay", {
	extend:'Ext.Panel',
	xtype: 'aboutschooloverlay',
	config:{
		modal: true,
		centered:true,
		hidden:true,
		hideOnMaskTap:true,
		width: 260, height: 130,
		items: { 
			xtype:"titlebar",
			docked:"top",
			title:"Overlay"
		},
		html:"Shows this Component next to another Componen",
		scrollable: true,
	}
});