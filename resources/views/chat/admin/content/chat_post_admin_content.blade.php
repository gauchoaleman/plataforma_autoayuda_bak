<?php
$usermsg = $_POST['usermsg'];
$user = Auth::user()->name;
$fp = fopen("log.html", 'a');
fwrite($fp, "<div class='msgln'><b>$user</b>: ".stripslashes(htmlspecialchars($usermsg))."<br></div>");
fclose($fp);
?>
@include('chat.admin.content.chat_window_admin_content')
