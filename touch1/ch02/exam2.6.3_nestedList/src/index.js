Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		var data = {
			text:'춘향전',
			items:[
			{
				text:'남원에서는...',
				items:[
				{
					text:'변사또파',
					items:[
						{
							text:'이방  <img src="./img/psn3.png" height="50">'
						},
						{
							text:'포졸 <img src="./img/psn4.png" height="50">'
						}
					]
				},
				{
					text:'춘향이파',
					items:[
						{
							text:'월매 <img src="./img/psn1.png" height="50">'
						},
						{
							text:'춘향 <img src="./img/psn2.png" height="50">'
						}
					]
				}
				]
			},
			{
				text:'한양에서는...',
				items:[
				{
					text:'몽룡 <img src="./img/psn4.png" height="50">'
				}					
				]
			}
			]
		};
		
		Ext.regModel('menuList',{
			fields:[{
				name: 'text', type: 'string'
			}]
		});
		
		var store = new Ext.data.TreeStore({
			model: 'menuList',
			root: data,
			proxy: {
				type: 'ajax',
				reader: {
					type: 'tree',
					root: 'items'
				}
			}
		});
		
		var nestedList = new Ext.NestedList({
			fullscreen: true,
			title: "춘향전",
			displayField: 'text',
			store: store
		});
		
		new Ext.Panel({
			fullscreen:true,
			items:nestedList
		});
	}
});
