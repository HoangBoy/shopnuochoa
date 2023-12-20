<?php

    $xoa = $_GET['idxoa'];
    echo $xoa;
     $sql = "DELETE FROM tbl_admin WHERE `tbl_admin`.`id` = $xoa";
    $sql_xoa = mysqli_query($mysqli,$sql);
    echo "<script> alert('Xoá người dùng thành công') </script>";
header("Location:index.php?action=quanlynguoidung&id=1");
?>