<?php

use db\DataSource;

require_once "DataSource.php";
require_once "Video.php";
$value=file_get_contents("php://input");
//$value=$_POST;
$data=json_decode($value,true);
//$value=["video_id"=>1];
$pdo=new DataSource();
$video=new Video($data);

try{
    $pdo->begin();
    $video->getDetails($pdo);
    $pdo->commit();
}catch(Exception $e){
    $pdo->rollback();
    echo $e;
}
//$data=array(["a"=>1]);
//echo json_encode($value);
echo json_encode($video->videoTable(true));

?>