Ext.define('Xenophy.controller.Main', {

    extend: 'Ext.app.Controller',

    init: function() {

        // Ext.applicationで設定した名前のオブジェクトがグローバルスコープに作成されている。
        console.log(window.Xenophy);

        // アプリケーションクラスオブジェクトはこっち。
        console.log(this.application);

        console.log('Xenophy.controller.Main init.');

    }

});
