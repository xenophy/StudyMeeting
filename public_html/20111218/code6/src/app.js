// Ext.Loader有効化
Ext.Loader.setConfig({
    enabled: true
});

// アプリケーション設定
Ext.application({

    // Viewport自動生成
    autoCreateViewport: true,

    // アプリケーション名
    name: 'Xenophy',

    // アプリケーションフォルダパス
    appFolder: 'src/app',

    // 使用コントローラー定義
    controllers: ['Main', 'Header', 'Navi', 'Center'],

    // アプリケーション起動時イベントハンドラ
    launch: function() {

    }

});
