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
                    'text' => 'グリッドパネル',
                    'leaf' => true
                )
            );
            break;

        case 'menu2':

            $ret['items'] = array(
                array(
                    'id' => 'menu2-item1',
                    'text' => 'フォームパネル',
                    'leaf' => true
                )
            );
            break;

    }

}

echo json_encode($ret);
