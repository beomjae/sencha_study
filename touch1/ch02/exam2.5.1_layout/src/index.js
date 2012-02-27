Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		var panel = new Ext.Panel({
			fullscreen: true,
			
			layout:{
				//레이아웃 속성 설정
				type:'vbox',
				pack:'center'
			},
			items:[
				{
					style:'background-color:red; font-size:40px',
					html: '첫번째'
				},
				{
					style:'background-color:green; font-size:40px',
					html: '두번째'
				},
				{
					style:'background-color:blue; font-size:40px',
					html: '세번째'
				}
			]
		});
	}
});
