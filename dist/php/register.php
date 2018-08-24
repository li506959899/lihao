<?php
    header('content-type:text/html;charset=utf-8');
    $usr = $_POST["usr"];
    $pwd = $_POST["pwd"];

    if($usr == "张三" && $pwd == "1234"){
        echo "<script>alert('登录成功！');</script>";    
    }else{
        echo "<script>alert('用户不存在！'); location.href='index.html';</script>";
    }




?>