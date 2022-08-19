<%--
  Created by IntelliJ IDEA.
  User: 1
  Date: 2022-08-17
  Time: 오후 2:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
<form id="start-screen">
  <input id="name-input" placeholder="주인공 이름을 입력하세요!">
  <button id="start">시작</button>
</form>
<div id="screen">
  <div id="hero-stat">
    <span id="hero-name"></span>
    <span id="hero-level"></span>
    <span id="hero-hp"></span>
    <span id="hero-xp"></span>
    <span id="hero-att"></span>
  </div>
  <form id="game-menu" style="display: none;">
    <div id="menu-1">1.모험</div>
    <div id="menu-2">2.휴식</div>
    <div id="menu-3">3.종료</div>
    <input id="menu-input" />
    <button id="menu-button">입력</button>
  </form>
  <form id="battle-menu" style="display: none;">
    <div id="battle-1">1.공격</div>
    <div id="battle-2">2.회복</div>
    <div id="battle-3">3.도망</div>
    <input id="battle-input" />
    <button id="battle-button">입력</button>
  </form>
  <div id="message"></div>
  <div id="monster-stat">
    <span id="monster-name"></span>
    <span id="monster-hp"></span>
    <span id="monster-att"></span>
  </div>
</div>
</body>
</html>