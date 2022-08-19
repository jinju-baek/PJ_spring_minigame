// 1. 가위바위보 이미지 0.5초마다 번갈아가며 출력
// 2. 버튼 클릭 시 가위바위보 이미지 1초 멈춤 후 1번 재개
// 3. 사용자가 클릭했을 때 승,패,무승부 유무 출력
// 4. 승리 시 1점 패배시 -1점으로 하여 3점을 먼저 얻는 경우 승리로 출력
const $computer = document.querySelector('#computer');
const $scissors = document.querySelector('#scissors');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');
const IMG_URL = '/resources/img/rsp.png';

const rspX = {
    scissors: '0px',
    rock: '-220px',
    paper: '-440px'
};

let flag = true;
let userScore = 0;
let computerScore = 0;
let setItv;

let rspState = 'scissors';
const changeComputerHand = () => {
    if (rspState === 'scissors') {
        rspState = 'rock';
    } else if (rspState === 'rock') {
        rspState = 'paper';
    } else if (rspState === 'paper') {
        rspState = 'scissors';
    }
    $computer.style.background = `url(${IMG_URL}) ${rspX[rspState]} 0`;
    $computer.style.backgroundSize = 'auto 200px';
};

const clickBtn = () => {
    if (flag) {
        clearInterval(setItv);
        flag = false;

        // 승 : 1, -2
        // 패 : 2, -1
        const rspNum = {
            scissors: -1,
            rock: 0,
            paper: 1
        };
        const userVal = event.target.id;
        const diff = rspNum[userVal] - rspNum[rspState];
        if ([1, -2].includes(diff)) {
            userScore += 1;
            $score.textContent = `${userScore}점 : 승리`;
        } else if ([2, -1].includes(diff)) {
            computerScore += 1;
            $score.textContent = `${userScore}점 : 패배`;
        } else {
            $score.textContent = `${userScore}점 : 무승부`;
        }

        if (userScore >= 3) {
            $score.textContent = `${userScore} : ${computerScore}  사용자 승리`;
        } else if (computerScore >= 3) {
            $score.textContent = `${userScore} : ${computerScore}  컴퓨터 승리`;
        } else {
            setTimeout(() => {
                flag = true;
                setItv = setInterval(changeComputerHand, 50);
            }, 1000);
        }
    }
};

$scissors.addEventListener('click', clickBtn);
$rock.addEventListener('click', clickBtn);
$paper.addEventListener('click', clickBtn);

const rspStart = () => {
    clearInterval(setItv);
    setItv = setInterval(changeComputerHand, 50);
    flag = true;
    userScore = 0;
    computerScore = 0;
    $score.textContent = '';
};