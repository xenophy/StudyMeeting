// Ext.Loader有効化
Ext.Loader.setConfig({
    enabled: true
});

// アプリケーション設定
Ext.application({

    // アプリケーション名
    name: 'Xenophy',

    // アプリケーションフォルダパス
    appFolder: 'src/app',

    // 使用コントローラー定義
    controllers: ['Main'],

    // アプリケーション起動時イベントハンドラ
    launch: function() {

        alert('Launch My Applicaton.');

    }

});

