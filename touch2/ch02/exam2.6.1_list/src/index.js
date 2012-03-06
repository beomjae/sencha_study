Ext.application({
	name:'list',
	
	launch:function() {
		// company 모델 등록
		Ext.define('company', {
			extend:'Ext.data.Model',
			config: {
				fields: ['company_grade', 'company_class', 'name']
			}
		});
		
		// 리스트 생성 , store 및 data는 내부 구현
		Ext.create('Ext.List', {
			fullscreen: true,
			itemTpl:'<div>직급:{company_grade} 부서:{company_class} 이름:<B>{name}</B></div>',

			store: Ext.create('Ext.data.Store', 
				{
					model:'company',
					sorters:'company_class',
					data:[
							{company_grade:'차장', company_class:'영업부', name:'홍길동1'},
							{company_grade:'차장', company_class:'총무부', name:'홍길동2'},
							{company_grade:'차장', company_class:'영업부', name:'홍길동3'},
							{company_grade:'차장', company_class:'총무부', name:'홍길동4'},
							{company_grade:'대리', company_class:'영업부', name:'홍길동5'},
							{company_grade:'대리', company_class:'총무부', name:'홍길동6'},
							{company_grade:'대리', company_class:'영업부', name:'홍길동7'},
							{company_grade:'대리', company_class:'총무부', name:'홍길동8'},
							{company_grade:'사원', company_class:'영업부', name:'홍길동9'},
							{company_grade:'사원', company_class:'총무부', name:'홍길동10'},
							{company_grade:'사원', company_class:'영업부', name:'홍길동11'},
							{company_grade:'사원', company_class:'총무부', name:'홍길동12'}
					]
				}
			)
				
		});
		

	}		
});

