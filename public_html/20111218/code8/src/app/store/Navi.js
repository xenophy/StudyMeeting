Ext.define('Xenophy.store.Navi', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url : './navi.php',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
