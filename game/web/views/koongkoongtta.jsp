<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-17
  Time: 오후 2:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
<!--
    1. 입력할 수 있는 글자는 '세글자'
    2. prompt 함수를 이용해 몇 명이 참가할지 선택
    3. 취소를 누를 경우 실행 x
 -->
<div><span id="index">1</span>번째 참가자</div>
<div>제시어 : <span id="word"></span></div>
<input id="inWord"><button id="inBtn">입력</button>
</body>
</html>
