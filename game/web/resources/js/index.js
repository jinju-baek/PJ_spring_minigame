const $gameTag = document.querySelector('#gameTag');
const $selGame = document.querySelector('#selGame');

const changeGame = (viewName) => { // 게임 클릭 시 화면 전환
    document.querySelectorAll('#selGame > div').forEach((e) => {
        e.style.display = 'none';
    });

    let gameView = 'tictactoe';
    switch (viewName) {
        case 'ttt':
            gameView = 'tictactoe';
            break;
        case 'cct':
            gameView = 'concentration';
            break;
        case 'kkt':
            gameView = 'koongkoongtta';
            break;
        case 'swp':
            gameView = 'mine-sweeper';
            break;
        case 'nbb':
            gameView = 'number-baseball';
            break;
        case 'rspck':
            gameView = 'response-check';
            break;
        case 'rsp':
            gameView = 'rsp';
            break;
        case 'trpg':
            gameView = 'text-rpg';
            break;
    }

    $selGame.querySelector('#' + gameView).style.display = 'block';
    if (gameView === 'concentration') {
        cctRestart();
    } else if (gameView === 'koongkoongtta') {
        kktRestart();
    } else if (gameView === 'number-baseball') {
        nbbStart();
    } else if (gameView === 'response-check') {
        rspckStart();
    } else if (gameView === 'rsp') {
        rspStart();
    } else if (gameView === 'text-rpg') {
        trpgStart();
    }
}

const clickFn = (event) => {
    axios.get('/game', {
        params: {
            keyword: event.target.className
        }
    }).then((response) => {
        changeGame(response.data);
    });
};
$gameTag.addEventListener('click', clickFn);
changeGame('ttt');
