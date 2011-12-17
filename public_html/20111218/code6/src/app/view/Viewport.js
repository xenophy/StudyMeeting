Ext.define('Xenophy.view.Viewport', {
    uses: [
        'Xenophy.view.Header',
        'Xenophy.view.Navi',
        'Xenophy.view.Center'
    ],
    layout: {
        type: 'border',
        padding: 5
    },
    extend: 'Ext.container.Viewport',
    items: [{
        xtype: 'xenophy-header',
        height: 35,
        region: 'north'
    }, {
        xtype: 'xenophy-navi',
        region: 'west',
        split: true,
        width: 240
    }, {
        xtype: 'xenophy-center',
        region: 'center'
    }]
});
