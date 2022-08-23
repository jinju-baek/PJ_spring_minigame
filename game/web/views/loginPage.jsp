<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-22
  Time: 오전 10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        .login-btn {
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <form method="post" action="/login">
        <span>id : </span>
        <input type="text" name="" id="userEmail">
        <br>
        <span>pw : </span>
        <input type="password" name="" id="userPw">
        <br>
        <input class="login-btn" type="button" value="로그인">
    </form>
</body>
</html>
