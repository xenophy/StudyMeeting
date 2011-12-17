Ext.define('Xenophy.controller.Header', {

    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'header', selector: 'xenophy-header'
    }, {
        ref: 'navi', selector: 'xenophy-navi'
    }],

    views: [
        'Center'
    ],

    init: function() {

        var me = this;

        me.control({
            'xenophy-header button[action=button1]': {
                toggle: function(btn, pressed) {

                    // Naviパネルコンポーネントオブジェクト取得
                    var navi = this.getNavi();

                    if(pressed) {
                        navi.collapse();
                    } else {
                        navi.expand();
                    }

                }
            },
            'xenophy-header button[action=button2]': {
                click: function() {

                    var header = this.getHeader();

                    header.getEl().ghost('b', {
                        callback: function() {
                            header.hide();
                            Ext.Function.defer(function() {
                                header.show();
                            }, 3000);
                        }
                    });

                }
            },
            'xenophy-header button[action=button3]': {
                click: function() {

                    var navi = this.getNavi();
                    navi.getStore().load();

                }
            }
        });

    }

});
