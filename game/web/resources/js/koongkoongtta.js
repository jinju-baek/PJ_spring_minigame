const $index = document.querySelector('#index'); // 입력된 참가자 수 span
const $word = document.querySelector('#word'); // 제시어 span
const $inWord = document.querySelector('#inWord'); // 제시어 input
const $inBtn = document.querySelector('#inBtn'); // button
let order = null;

const clickBtnKkt = () => {
    let word = $word.textContent;
    let inWord = $inWord.value;

    if (inWord.length !== 3) {
        alert('다시 입력해주세요.');
        $inWord.value = '';
        return;
    }
    if (word === '' || word[word.length - 1] === inWord[0]) {
        let index = Number($index.textContent);
        if (index >= order) {
            index = 1;
            $index.textContent = index;
        } else {
            $index.textContent = index + 1;
        }
        $word.textContent = inWord;
        $inWord.value = '';
    } else {
        alert('올바르지 않은 단어입니다.');
        $inWord.value = '';
    }
}

const kktStart = () => {
    order = Number(prompt('몇 명이 참가하나요?')); // 참가자 수
    if(order){
        $inBtn.addEventListener('click', clickBtnKkt);
    } else {
        alert('종료되었습니다.');
    }
};

const kktRestart = () => {
    $index.textContent = '1';
    $word.textContent = '';
    $inWord.textContent = '';
    order = null;
    kktStart();
};
