<?php

$ret = array('items' => array());

if(!isset($_REQUEST['node'])) {
    $_REQUEST['node']='root';
}

if($_REQUEST['node']=='root') {

    $ret['items'] = array(array(
        'id'=>'menu1',
        'text'=>'メニュー1'
    ), array(
        'id'=>'menu2',
        'text'=>'メニュー2'
    ));

} else {

    switch($_REQUEST['node']) {

        case 'menu1':

            $ret['items'] = array(
                array(
                    'id' => 'menu1-item1',
                    'text' => 'アイテム１',
                    'leaf' => true
                )
            );
            break;

        case 'menu2':

            $ret['items'] = array(
                array(
                    'id' => 'menu2-item1',
                    'text' => 'アイテム1',
                    'leaf' => true
                )
            );
            break;

    }

}

echo json_encode($ret);
