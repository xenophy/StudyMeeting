Ext.define('Xenophy.controller.Header', {

    extend: 'Ext.app.Controller',

    init: function() {

        var me = this;

        me.control({
            'xenophy-header button[action=button1]': {
                click: function() {
                    Ext.Msg.alert('ボタン1', 'クリックされました。');
                }
            },
            'xenophy-header button[action=button2]': {
                click: function() {
                    Ext.Msg.alert('ボタン2', 'クリックされました。');
                }
            },
            'xenophy-header button[action=button3]': {
                click: function() {
                    Ext.Msg.alert('ボタン3', 'クリックされました。');
                }
            }
        });

    }

});
