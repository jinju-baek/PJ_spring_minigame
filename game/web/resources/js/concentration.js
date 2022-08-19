// 1. 카드 개수를 짝수로 입력받는다.
// 2. 카드를 랜덤으로 섞는다.
// 3. 사용자가 카드를 뒤집을 경우 카드 두개가 같은 색상이면 다시 뒤집지 않는다.
// 4. 모든 카드가 뒤집어진 경우 축하한다는 메시지 출력

let inCount = null;
let colorSlice = null;
let colorCopy = null;
let startTime = null;

const $wrapper = document.querySelector('#wrapper');
const colors = ['red', 'pink', 'orange', 'yellow', 'white', 'green', 'blue', 'black', 'grey', 'puple'];
let shuffled = [];
let clicked = [];
let completed = [];
let cickable = false;

function shuffle() { // 피셔-예이츠 셔플
    for (let i = 0; i < inCount; i++) {
        const index = Math.floor(Math.random() * colorCopy.length);
        shuffled = shuffled.concat(colorCopy.splice(index, 1));
    }
}

function cctRestart() {
    $wrapper.innerHTML = '';
    completed = [];
    shuffled = [];
    cctStart();
}

// 버그 1 - 시작 시 카드가 뒤집어짐 -> 해결
// 버그 2 - 카드 3장이상 뒤집을 경우 2장만 뒤집어짐 -> 해결
// 버그 3 - 같은 카드를 클릭할 수 있음
// 버그 4 - 이미 짝을 맞춘 카드를 계속 클릭하면 승리로 인식
function onClickCard() {
    if (!clickable || clicked[0] === this || completed.includes(this)) {
        return;
    }
    this.classList.add('flipped');

    // 카드 두개가 같은 색상일 경우 뒤집지 않고, 다른 색상일 경우 뒤집는다
    clicked.push(this);

    // 1. 클릭은 2번까지만 할 수 있도록 한다.
    if (clicked.length < 2) {
        return;
    }
    clickable = false;
    const firstBackColor = clicked[0].querySelector('.card-back').style.backgroundColor;
    const secondBackColor = clicked[1].querySelector('.card-back').style.backgroundColor;
    if (firstBackColor === secondBackColor) { // 뒤집은 두개의 카드의 색이 같은가?
        completed = completed.concat(clicked);
        clicked = [];
        clickable = true;
        if (completed.length === inCount) { // 모든 카드를 다 맞췄는가?
            setTimeout(() => {
                let endTime = new Date();
                alert(`${(endTime - startTime)/1000}초가 걸렸습니다. 축하합니다!`);
                clickable = false;
                completed = [];
                shuffled = [];
                cctRestart();
                return;
            }, 1000);
        }
        return;
    }

    // 2. 같은 색상인지 확인 후 다른 색상일 경우 뒤집는다.
    setTimeout(() => {
        clicked[0].classList.remove('flipped');
        clicked[1].classList.remove('flipped');
        clicked = [];
        clickable = true;
    }, 500);
}

function createCard(i) {
    const card = document.createElement('div');
    card.className = 'card';
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    cardBack.style.backgroundColor = shuffled[i];
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    card.addEventListener('click', onClickCard); // 카드 클릭이벤트 추가
    return card;
}

function cctStart() {
    inCount = parseInt(prompt('카드 개수를 짝수로 입력하세요.(최대 20)'));
    if (inCount) {

        colorSlice = colors.slice(0, inCount / 2);
        colorCopy = colorSlice.concat(colorSlice);
        startTime = new Date();

        clickable = false;
        shuffle();
        for (let i = 0; i < shuffled.length; i++) {
            const card = createCard(i);
            $wrapper.appendChild(card);
        }

        document.querySelectorAll('.card').forEach((card, index) => { // 시작 시 전체 카드 한 번씩 뒤집기
            setTimeout(() => {
                card.classList.add('flipped');
            }, 1000 + 100 * index);
        });

        setTimeout(() => {
            document.querySelectorAll('.card').forEach((card) => { // 한 번씩 뒤집은 카드들 다시 뒤집기
                card.classList.remove('flipped');
            });
            clickable = true;
        }, 5000);
    } else {
        alert('종료되었습니다.');
    }
}

