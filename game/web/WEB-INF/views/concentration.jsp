<!DOCTYPE html>

<head>
  <meta charset="UTF-8">
  <style>
    .card {
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 20px;
      width: 70px;
      height: 100px;
      perspective: 140px;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
    }

    .card.flipped .card-inner {
      transform: rotateY(180deg);
    }

    .card-front {
      background: navy;
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid black;
      backface-visibility: hidden;
    }

    .card-back {
      transform: rotateY(180deg);
    }
  </style>
</head>

<body>
<div id="wrapper"></div>
</body>

</html>




