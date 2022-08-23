<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-16
  Time: 오후 4:07
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <style>
        .screen {
            width: 300px;
            height: 200px;
            text-align: center;
            user-select: none;
        }

        .screen.waiting {
            background-color: aqua;
        }

        .screen.ready {
            background-color: red;
            color: white;
        }

        .screen.now {
            background-color: greenyellow;
        }
    </style>
</head>
<body>
<div id="screen" class="waiting screen">클릭해서 시작하세요.</div>
<div id="rspckResult"></div>
</body>
</html>
