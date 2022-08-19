<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-16
  Time: 오후 1:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <style>
        .game-box {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
        .game-tag {
            border: 1px solid black;
            list-style: none;
            padding-left: 0px;
            text-align: center;
            width: 150px;
        }
        .game-tag > li {
            cursor: pointer;
        }
        .game-tag > li:hover{
            text-decoration: underline;
        }
        .sel-game {
            border: 1px solid black;
            margin-left: 10px;
            padding: 10px;
            width: 500px;
            height: 500px;
        }
        .sel-game > div {
            display: none;
        }
    </style>
</head>
<body>
<div id="gameBox" class="game-box">
    <ul id="gameTag" class="game-tag">
        <li class="ttt">틱택토</li>
        <li class="cct">짝맞추기</li>
        <li class="kkt">쿵쿵따</li>
        <li class="swp">지뢰찾기</li>
        <li class="nbb">숫자야구</li>
        <li class="rspck">반응속도 체크</li>
        <li class="rsp">가위바위보</li>
        <li class="trpg">텍스트 RPG</li>
    </ul>
    <div id="selGame" class="sel-game">
        <div id="tictactoe"><jsp:include page="/WEB-INF/views/tictactoe.jsp"></jsp:include></div>
        <div id="concentration"><jsp:include page="/WEB-INF/views/concentration.jsp"></jsp:include></div>
        <div id="koongkoongtta"><jsp:include page="/WEB-INF/views/koongkoongtta.jsp"></jsp:include></div>
        <div id="mine-sweeper"><jsp:include page="/WEB-INF/views/mine-sweeper.jsp"></jsp:include></div>
        <div id="number-baseball"><jsp:include page="/WEB-INF/views/number-baseball.jsp"></jsp:include></div>
        <div id="response-check"><jsp:include page="/WEB-INF/views/response-check.jsp"></jsp:include></div>
        <div id="rsp"><jsp:include page="/WEB-INF/views/rsp.jsp"></jsp:include></div>
        <div id="text-rpg"><jsp:include page="/WEB-INF/views/text-rpg.jsp"></jsp:include></div>
    </div>
</div>
</body>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="/resources/js/tictactoe.js"></script>
<script src="/resources/js/concentration.js"></script>
<script src="/resources/js/koongkoongtta.js"></script>
<script src="/resources/js/mine-sweeper.js"></script>
<script src="/resources/js/number-baseball.js"></script>
<script src="/resources/js/response-check.js"></script>
<script src="/resources/js/rsp.js"></script>
<script src="/resources/js/text-rpg.js"></script>
<script src="/resources/js/index.js"></script>
</html>
