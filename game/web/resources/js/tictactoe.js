// 1. 3x3 테이블에서 한 줄을 먼저 채우는 쪽이 승리
// 2. O와 X를 번갈아가며 클릭할 수 있다.
// 3. 이미 값이 입력된 칸은 값을 유지한다.
// 4. 값을 입력한 후에 승리여부를 판단한다.
// 5. 값을 모두 입력해도 승패가 결정되지 않으면 무승부


// const $table = document.createElement('table');
// const $result = document.createElement('div');
const $table = document.querySelector('#tttTable');
const $result = document.querySelector('#result');
let turn = 'O';
let arr = [];

const hasWinner = (target) => {
    const rowIndex = target.parentNode.rowIndex;
    const cellIndex = target.cellIndex;

    if (
        arr[rowIndex][0].textContent === turn &&
        arr[rowIndex][1].textContent === turn &&
        arr[rowIndex][2].textContent === turn
    ) {
        return true;
    }

    if (
        arr[0][cellIndex].textContent === turn &&
        arr[1][cellIndex].textContent === turn &&
        arr[2][cellIndex].textContent === turn
    ) {
        return true;
    }

    if (
        arr[0][0].textContent === turn &&
        arr[1][1].textContent === turn &&
        arr[2][2].textContent === turn
    ) {
        return true;
    }
    if (
        arr[0][2].textContent === turn &&
        arr[1][1].textContent === turn &&
        arr[2][0].textContent === turn
    ) {
        return true;
    }

    return false;
};

const checkWinnerAndDraw = (target) => {
    if (hasWinner(target)) {
        $result.textContent = `${turn}님의 승리!`;
        $table.removeEventListener('click', callBack);
        return true;
    }

    let draw = arr.flat().every((val) => val.textContent);
    if (draw) {
        $result.textContent = '무승부';
        return true;
    }
    turn = turn === 'O' ? 'X' : 'O';
    return false;
};

const checkComputerTurn = (target) => () => {
    let emptyArr = [];
    const ri = target.parentNode.rowIndex; // 현재 선택한 타겟의 행 인덱스
    const ci = target.cellIndex; // 현재 선택한 타겟의 열 인덱스

    // 똑똑한 컴퓨터의 기준

    // 1. 사용자의 승리를 막는다.
    // 1-1. 사용자가 클릭한 열또는 행라인 중에서 두 개 이상 입력된 경우 그 라인의 한칸을 채운다.

    let rcnt = 0; // 사용자가 선택한 행 안의 O의 개수
    let ccnt = 0; // 사용자가 선택한 열 안의 O의 개수
    let dlcnt = 0; // 사용자가 선택한 왼쪽 대각선 줄 안의 O의 개수
    let drcnt = 0; // 사용자가 선택한 오른쪽 대각선 줄 안의 O의 개수

    // 빈칸 찾기
    arr[ri].forEach((row) => { // 사용자가 선택한 타겟의 행
        if (row.textContent === 'O') rcnt++;
    });

    for (let i = 0; i < arr.length; i++) { // 사용자가 선택한 타겟의 열
        if (arr[i][ci].textContent === 'O') ccnt++;
    }


    if ( //arr[0][0], arr[1][1], arr[2][2] 왼쪽 대각선
        (ri === 0 && ci === 0) ||
        (ri === 1 && ci === 1) ||
        (ri === 2 && ci === 2)
    ) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][i].textContent === 'O') {
                dlcnt++;
            }
        }
    }

    if ( // arr[0][2], arr[1][1], arr[2][0] 오른쪽 대각선
        (ri === 0 && ci === 2) ||
        (ri === 1 && ci === 1) ||
        (ri === 2 && ci === 0)
    ) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][arr.length - i - 1].textContent === 'O') {
                drcnt++;
            }
        }
    }

    // 빈칸 채우기
    let turnChange = false;
    if (rcnt > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[ri][i].textContent) {
                arr[ri][i].textContent = 'X';
                turnChange = true;
                clickable = true;
                if (checkWinnerAndDraw(arr[ri][i])) return;
            }
        }
    } else if (ccnt > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i][ci].textContent) {
                arr[i][ci].textContent = 'X';
                turnChange = true;
                clickable = true;
                if (checkWinnerAndDraw(arr[i][ci])) return;
            }
        }
    } else if (dlcnt > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i][i].textContent) {
                arr[i][i].textContent = 'X';
                turnChange = true;
                clickable = true;
                if (checkWinnerAndDraw(arr[i][ci])) return;
            }
        }
    } else if (drcnt > 1) {
        for (let i = 0; i < arr.length; i++) {
            if (!arr[i][arr.length - i - 1].textContent) {
                arr[i][arr.length - i - 1].textContent = 'X';
                turnChange = true;
                clickable = true;
                if (checkWinnerAndDraw(arr[i][ci])) return;
            }
        }
    }

    if (turnChange) return;

    emptyArr = arr.flat().filter((val) => !val.textContent);
    const $selTd = emptyArr[Math.floor(Math.random() * emptyArr.length)];
    $selTd.textContent = turn;
    if (checkWinnerAndDraw($selTd)) return;

    clickable = true;
};

let clickable = true;
const callBack = (event) => {
    if (!clickable) return;
    clickable = false;

    if (event.target.textContent) return;

    // 사용자 턴일 때
    event.target.textContent = turn;
    if (checkWinnerAndDraw(event.target)) return;

    // 컴퓨터 턴일 때
    setTimeout(checkComputerTurn(event.target), 1000);
};

const tttStart = () => {
    $table.textContent = '';
    $result.textContent = '';
    arr = [];

    for (let i = 0; i < 3; i++) {
        const $tr = document.createElement('tr');
        const cell = [];
        for (let j = 0; j < 3; j++) {
            const $td = document.createElement('td');
            $tr.append($td);
            cell.push($td);
        }
        $table.append($tr);
        arr.push(cell);
    }
    $table.addEventListener('click', callBack);
}

// $tttBox.append($table);
// $tttBox.append($result);
