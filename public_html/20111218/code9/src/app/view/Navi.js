Ext.define('Xenophy.view.Navi', {
    alias: 'widget.xenophy-navi',
    extend: 'Ext.tree.Panel',
    title: 'Navi',
    store: 'Navi',
    rootVisible: false,
    animate: false,
    tbar: [{
        xtype: 'button',
        action: 'reload',
        text: 'リロード'
    }]
});
