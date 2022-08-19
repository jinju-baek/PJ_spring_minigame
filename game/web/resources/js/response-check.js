
// 1. 대기화면(파란색)을 클릭하면 준비화면(빨간색)으로 바뀐다.
// 2. 준비화면(빨간색)에서 2~3초 후 시간 측정 화면(초록색)으로 바뀐다.
// 3. 준비화면(빨간색)을 클릭하면 너무 성급하시네요! 라는 메시지를 출력한다.
// 4. 시간 측정 화면(초록색)을 클릭하면 시간초를 출력한다.
// 5. 사용자가 클릭했던 시간초들의 평균을 출력한다.
// 6. 사용자가 클릭했던 시간초들 중 상위 5개의 시간초를 출력한다.
const $screen = document.querySelector('#screen');
const $rspckResult = document.querySelector('#rspckResult');

let rspckStartTime; // 시작시간
let endTime; // 클릭시간
let timeOutId; // setTimeout 변수
let times = [];

const clickScreen = (event) => {
    if (event.target.classList.contains('waiting')) {
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요.';
        timeOutId = setTimeout(() => {
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요!';
            rspckStartTime = new Date();
        }, Math.floor((Math.random() * 1000)) + 2000);
    } else if (event.target.classList.contains('ready')) {
        clearTimeout(timeOutId);
        $screen.classList.remove('ready');
        $screen.classList.add('waiting');
        $screen.textContent = '너무 성급하시네요!';
    } else if (event.target.classList.contains('now')) {
        endTime = new Date();
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요.';
        const diff = endTime - rspckStartTime;
        times.push(diff);
        const avg = times.reduce((a, c) => a + c) / times.length;
        $rspckResult.textContent = `현재 : ${diff}ms, 평균 : ${avg}ms`;
        times.sort((a, b) => a - b);
        times.slice(0, 5).forEach((e, i) => {
            $rspckResult.append(document.createElement('br'), `${i + 1}위 : ${times[i]}ms`);
        });
    }
}

const rspckStart = () => {
    clearTimeout(timeOutId);

    $screen.addEventListener('click', clickScreen);
    rspckStartTime = null; // 시작시간
    endTime = null; // 클릭시간
    timeOutId = null; // setTimeout 변수
    times = [];

    $screen.classList?.remove('ready');
    $screen.classList?.remove('now');
    $screen.classList?.remove('waiting');
    $screen.classList.add('waiting');
    $screen.textContent = '클릭해서 시작하세요.';
    $rspckResult.textContent = '';
};
