Ext.define('GNApp.model.GuestBook', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'text'
            },
            {
                name: 'created_at',
                type: 'date'
            },
            {
                name: 'name'
            }
        ]
    }
});