<?php
   $dbname = 'dailystudy';
   $dsn = 'mysql:dbname='.$dbname.';host=localhost;charset=utf8';
   $user = 'root';
   $password = '';
   $db = new PDO($dsn, $user, $password);
?>
