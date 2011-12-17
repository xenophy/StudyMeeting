Ext.define('Xenophy.controller.Navi', {
    extend: 'Ext.app.Controller',
    refs: [{
        ref: 'navi', selector: 'xenophy-navi'
    }],
    stores: ['Navi'],
    init: function() {

        var me = this;

        me.control({
            'xenophy-navi button[action=reload]': me.onReload
        });

    },
    onReload: function() {
        this.getNavi().getStore().load();
    }
});
