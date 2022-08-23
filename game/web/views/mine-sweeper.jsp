<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-17
  Time: 오후 2:31
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        .swp-table {
            border-collapse: collapse;
        }

        .swp-table td {
            border: 1px solid #bbb;
            text-align: center;
            line-height: 20px;
            width: 20px;
            height: 20px;
            background: #888;
        }

        .swp-table td.opened {
            background: white;
        }

        .swp-table td.flag {
            background: red;
        }

        .swp-table td.question {
            background: orange;
        }
    </style>
</head>
<body>
<table id="swpTable" class="swp-table">
    <tbody></tbody>
</table>
<div id="swpDiv"></div>
</body>
</html>
