Ext.define('GNApp.model.ItemVO', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
            	name:'seq'
            },
            {
                name: 'name'
            },
            {
            	name:'image'
            },
            {
            	name:'content'
            }
        ]
    }
});