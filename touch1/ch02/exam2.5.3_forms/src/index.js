Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		Ext.regModel('Sex', {
			fields:[
				{name: 'sex', type: 'string'},
				{name: 'title', type: 'string'}
			]
		});
		 
	}
});
