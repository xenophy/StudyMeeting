Ext.define('Xenophy.view.Header', {
    alias: 'widget.xenophy-header',
    extend: 'Ext.container.Container',
    defaults: {
        xtype: 'container'
    },
    layout: 'hbox',
    items: [{
        html: {
            tag: 'h1',
            html: 'Code.9 - Xenophy Application'
        },
        flex: 1
    }, {
        xtype: 'toolbar',
        width: 217,
        items: [{
            text: 'ボタン1',
            enableToggle: true,
            iconCls: 'x-icon-1',
            action: 'button1'
        }, {
            text: 'ボタン2',
            iconCls: 'x-icon-2',
            action: 'button2'
        }, {
            text: 'ボタン3',
            iconCls: 'x-icon-3',
            action: 'button3'
        }]
    }]
});
