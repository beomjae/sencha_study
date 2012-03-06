Ext.setup({
	icon: 'icon.png',
	tabletStartupScreen: 'tablet_startup.png',
	phoneStartupScreen: 'phone_startup.png',
	glossOnIcon: false,
	onReady: function() {
		// company 모델 등록
		Ext.define('company', {
			extend:'Ext.data.Model',
			config: {
				fields:['pic', 'companygrade', 'companyclass', 'name', 'history']
			}
		});
		
		// history 모델 등록
		Ext.define('history', {
			extend:'Ext.data.Model',
			config: {
				fields:['degree']
			}
		});
				
		var itemTemplate = new Ext.XTemplate(
			'<tpl for=".">',
				'<div>',
					'<table border="1" width="100%">',
						'<tr>',
							'<td rowspan="2" width="25%">({#})<img src="{pic}" height="70"</td>',
							'<td>{[this.getDegree("파랑")]} 직급:{companygrade}</td>',
							'<td>부서:{companyclass}</td>',
						'</tr>',
						'<tr>',
							'<td colspan="2">',
								'이름:<b>{name}</b>',
								'<tpl for="history">',
									' <small>{[xindex]}/{[xcount]}</small> ',   //xindex : 루프의 현재 인덱스, xcount : 루프의 전체갯수
								'</tpl>',
							'</td>',
						'</tr>',
					'</table>',
				'</div>',
			'</tpl>',
			{
				// member functions
				getDegree:function(input){
					if(input=="파랑") {
						return '<font color="blue">';
					} else {
						return '';
					}
				}
			}	
		);
		
		Ext.create('Ext.List', {
			fullscreen:true,
			itemTpl: itemTemplate,
			store: Ext.create('Ext.data.Store',{
				model:'company',
				sorters: 'companygrade',
				data:[
					{pic:'./img/psn1.png', companygrade:'사원', companyclass:'영업1부', name:'홍길동1', history:[{degree:'사원'}]},
					{pic:'./img/psn2.png', companygrade:'대리', companyclass:'영업2부', name:'홍길동2', history:[{degree:'계장'},{degree:'대리'}]},
					{pic:'./img/psn3.png', companygrade:'과장', companyclass:'인사부', name:'홍길동3', history:[{degree:'계장'},{degree:'대리'},{degree:'과장'}]},
					{pic:'./img/psn4.png', companygrade:'차장', companyclass:'총무부', name:'홍길동4', history:[{degree:'계장'},{degree:'대리'},{degree:'과장'}]}
				]			
			})
		});
		
	}
});
