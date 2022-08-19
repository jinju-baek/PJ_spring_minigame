const $nbbForm = document.querySelector('#nbbForm');
const $nbbLogs = document.querySelector('#nbbLogs');

let answer = [];
let out = 0;
let tries = [];

const nbbStart = () => {
    const nbbArr = Array(9).fill(0).map((e, i) => { return i + 1; }); // 1 ~ 9 생성
    answer = [];
    out = 0;
    tries = [];
    $nbbForm.querySelector('#nbbInput').value = '';
    $nbbLogs.textContent = '';

    for (let i = 0; i < 4; i++) { // 난수 생성
        const index = Math.floor(Math.random() * nbbArr.length);
        answer.push(nbbArr[index]);
        nbbArr.splice(index, 1);
    }
    console.log(answer);
    // 숫자가 맞으면 1볼
    // 숫자와 자릿수까지 맞으면 1스트라이크
    // 4스트라이크이면 성공
    // 10번까지 시도할 경우 실패
    // 0볼 0스트라이크이면 out
    // 3out일 경우 실패

}

const checkVal = (value) => {
    if (value.length !== 4) {
        alert('4자리로 입력해주세요');
        return false;
    }
    if (new Set(value).size !== 4) {
        alert('중복된 숫자 없이 입력해주세요.');
        return false;
    }
    if (tries.indexOf(value) > -1) {
        alert('이미 시도한 값입니다.');
        return false;
    }
    return true;
}

$nbbForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let strike = 0;
    let ball = 0;
    const value = event.target[0].value;
    if (!checkVal(value)) return; // 값 유효성 체크

    answer.forEach((e, i) => {
        const valIndex = value.indexOf(e);
        if (valIndex > -1) {
            if (i === valIndex) {
                strike += 1;
            } else {
                ball += 1;
            }
        }
    });

    if (answer.join('') === value) { // 성공했을 경우
        $nbbLogs.append('홈런!!');
        return;
    }

    if (strike === 0 && ball === 0) { // 0스트라이크 0볼일 경우
        out += 1;
        $nbbLogs.append(`${value} : ${out}아웃`, document.createElement('br'));
    } else {
        $nbbLogs.append(`${value} : ${strike} 스트라이크, ${ball} 볼`, document.createElement('br'));
    }

    if (tries.length > 8 || out > 2) { // 10번 시도 했을 경우
        $nbbLogs.append(`실패! 정답은 ${answer.join('')}`);
        return;
    }
    tries.push(value);
});
