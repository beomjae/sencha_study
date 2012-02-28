Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		var count = 0;
		var tabpanel = new Ext.TabPanel(
			{
				tabBar: {
					dock: 'bottom',
					layout: {
						pack:'center'
					}
				},
				fullscreen:true,
				ui:'light',
				cardSwitchAnimation: {
					type:'cube'					
				},
				iconAlign:'left',
				defaults: {
					scroll:'vertical'
				},
				items:[
					{
						title: 'Abort',
						html: '<center><font size="64" color="red"><br>1<br>첫번째</font></center>',
						iconCls: 'info',
						cls: 'card1',
						handler:function() {
							count = 0;
						}
					},{
						title: 'Favorites',
						html: '2 두번째',
						iconCls: 'favorites',
						cls: 'card2',
						badgeText: '배지',
						handler:function(){
							count = 1;
						}
					},{
						title:'Downloads',
						id: 'tab3',
						html: '<center>세번째</center>',
						badgeText: '배지를 하나 더...',
						cls: 'card3',
						iconCls: 'download',
						handler:function() {
							count = 2;
						}
					},{
						title:'Settings',
						html:'<center>네번째</center>',
						cls: 'card4',
						iconCls: 'settings',
						handler:function() {
							count = 3;
						}
					},{
						title: 'User',
						html: '<center>5 다섯번째</center>',
						cls: 'card5',
						iconCls: 'user',
						handler:function() {
							count = 4;
						}
					}
				],
				dockedItems:[
					{
						xtype: 'toolbar',
						dock: 'top',
						scroll:'horizontal',
						layout:{
							pack:'center'
						},
						defaults: {
							iconMask: true,
							ui:'plain'
						},
						items:[
							{
								iconMask:true,
								ui: 'back',
								text: 'back',
								handler:function() {
									console.log(tabpanel);
									count = count - 1;
									if(count < 0){
										count = 4;
									}
									if(count > 4){
										count = 0;
									}
									tabpanel.setActiveItem(count);
								}
							},{
								iconMask:true,
								ui:'forward',
								text:'forward',
								handler:function(){
									count = count + 1;
									if(count < 0) {
										count = 4;
									}
									if(count > 4) {
										count = 0;
									}
									tabpanel.setActiveItem(count);
								}
							}
						]
					}					
				]
			}
		);
	}
});
