Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		Ext.regModel('company', {
			fields:['pic', 'companygrade', 'companyclass', 'name']
		});		
		
		var itemTemplate = new Ext.XTemplate(
			'<tpl for=".">',
				'<tpl if="companyclass[0]==\'영\'">',
					'<div>',
						'<table border="1" width="100%" bgcolor="yellow">',
							'<tr>',
								'<td rowspan="2"><img src="{pic}" height="70"></td>',
								'<td>직급:{companygrade}</td>',
								'<td>부서:{companyclass}</td>',
							'</tr>',
							'<tr>',
								'<td colspan="2">이름:<b>{name}</b></td>',
							'</tr>',
						'</table>',
					'</div>',
				'</tpl>',
				'<tpl if="companyclass[0]==\'인\'">',
					'<div>',
						'<table border="1" width="100%" bgcolor="white">',
							'<tr>',
								'<td rowspan="2"><img src="{pic}" height="70"></td>',
								'<td>직급:{companygrade}</td>',
								'<td>부서:{companyclass}</td>',
							'</tr>',
							'<tr>',
								'<td colspan="2">이름:<b>{name}</b></td>',
							'</tr>',
						'</table>',
					'</div>',
				'</tpl>',
				'<tpl if="companyclass[0]==\'총\'">',
					'<div>',
						'<table border="1" width="100%" bgcolor="lightgreen">',
							'<tr>',
								'<td rowspan="2"><img src="{pic}" height="70"></td>',
								'<td>직급:{companygrade}</td>',
								'<td>부서:{companyclass}</td>',
							'</tr>',
							'<tr>',
								'<td colspan="2">이름:<b>{name}</b></td>',
							'</tr>',
						'</table>',
					'</div>',
				'</tpl>',
			'</tpl>'	
		);
		
		company_list = new Ext.List({
			fullscreen:true,
			itemTpl: itemTemplate,
			store: new Ext.data.Store({
				model: 'company',
				sorters: 'companygrade',
				data:[
					{pic:'./img/psn1.png', companygrade:'사원', companyclass:'영업1부', name:'홍길동1'},
					{pic:'./img/psn2.png', companygrade:'대리', companyclass:'영업2부', name:'홍길동2'},
					{pic:'./img/psn3.png', companygrade:'과장', companyclass:'인사부', name:'홍길동3'},
					{pic:'./img/psn4.png', companygrade:'차장', companyclass:'총무부', name:'홍길동4'}
				]	
			})
		});
		
		new Ext.Panel({
			fullscreen:true,
			layout: {
				type: 'vbox',
				align: 'stretch',
				pack: 'center'
			},
			items: company_list
		});
	}
});
