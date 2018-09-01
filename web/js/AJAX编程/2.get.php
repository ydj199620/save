<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

$username = $_GET['username'];
$age = $_GET['age'];

echo "我是一个小男孩，我叫：{$username}，年龄：{$age}";