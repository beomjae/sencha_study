Ext.application({
	name:'Sencha',
	launch: function() {
		Ext.create('Ext.Panel',{
			fullscreen: true,
			html: '<br><br><br><center>Hello Sencha Touch!!</center>'
		})
	}
});
