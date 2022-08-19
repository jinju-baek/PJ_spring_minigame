const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
const $message = document.querySelector('#message');


class Game {
    constructor(name) {
        this.hero = null;
        this.monster = null;
        this.monsterList = [
            { name: '슬라임', hp: 25, xp: 10, att: 10 },
            { name: '스켈레톤', hp: 50, xp: 15, att: 20 },
            { name: '마왕', hp: 150, xp: 35, att: 50 }
        ];
        this.start(name);
    }
    start(name) {
        $gameMenu.addEventListener('submit', this.menuInputEvt);
        $battleMenu.addEventListener('submit', this.battleInputEvt);
        this.hero = new Hero(this, name);
        this.printInfo('hero', 'n');
        this.changeScreen('menu');
    }
    createMonster() {
        const randomMonster = this.monsterList[Math.floor(Math.random() * this.monsterList.length)];
        this.monster = new Monster(randomMonster.name, randomMonster.hp, randomMonster.xp, randomMonster.att);
        this.printInfo('monster', 'n');
    }
    changeScreen(screen) {
        if (screen === 'start') {
            $startScreen.style.display = 'block';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'none';
        } else if (screen === 'menu') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'block';
            $battleMenu.style.display = 'none';
        } else if (screen === 'battle') {
            $startScreen.style.display = 'none';
            $gameMenu.style.display = 'none';
            $battleMenu.style.display = 'block';
        }
    }
    printInfo(target, initYn) {
        if (target === 'hero') {
            if (initYn === 'n') {
                $heroName.textContent = this.hero.name;
                $heroLevel.textContent = `${this.hero.lev}Lv`;
                $heroHp.textContent = `HP: ${this.hero.hp}/${this.hero.maxHp}`;
                $heroXp.textContent = `XP: ${this.hero.xp}/${this.hero.lev * 15}`;
                $heroAtt.textContent = `ATT: ${this.hero.att}`;
            } else if (initYn === 'y') {
                $heroName.textContent = '';
                $heroLevel.textContent = '';
                $heroHp.textContent = '';
                $heroXp.textContent = '';
                $heroAtt.textContent = '';
            }
        } else if (target === 'monster') {
            if (initYn === 'n') {
                $monsterName.textContent = this.monster.name;
                $monsterHp.textContent = `HP: ${this.monster.hp}/${this.monster.maxHp}`;
                $monsterAtt.textContent = `ATT: ${this.monster.att}`;
            } else if (initYn === 'y') {
                $monsterName.textContent = '';
                $monsterHp.textContent = '';
                $monsterAtt.textContent = '';
            }
        }
    }
    printMsg(message) {
        $message.textContent = message;
    }
    quit() {
        this.changeScreen('start');
        this.printInfo('hero', 'y');
        this.printInfo('monster', 'y');
        this.hero = null;
        this.monster = null;
        $gameMenu.removeEventListener('submit', this.menuInputEvt);
        $battleMenu.removeEventListener('submit', this.battleInputEvt);
    }
    menuInputEvt = (event) => { // 모드 선택
        event.preventDefault();
        if (event.target['menu-input'].value === '1') { // 모험
            this.changeScreen('battle');
            this.createMonster();
            this.printMsg(`몬스터가 나타났다! ${this.monster.name}인 것 같다.`);
        } else if (event.target['menu-input'].value === '2') { // 휴식
            this.hero.hp = this.hero.maxHp;
            this.printInfo('hero', 'n');
            this.printMsg('체력이 회복되었습니다.');
        } else if (event.target['menu-input'].value === '3') { // 종료
            this.quit();
            this.printMsg('게임이 종료되었습니다.');
        }
    }
    battleInputEvt = (event) => { // 모드 -> 모험 선택
        event.preventDefault();
        if (event.target['battle-input'].value === '1') { // 공격
            this.hero.attack(this.monster);
            this.monster.attack(this.hero);

            if (this.hero.hp <= 0) { // 1. 캐릭터가 죽었을 때
                this.quit();
                this.printMsg('캐릭터가 전사하였습니다. 캐릭터를 생성해주세요.');
            } else if (this.monster.hp <= 0) { // 2. 몬스터를 죽였을 때
                this.printMsg(`${this.monster.name}를 죽이고 경험치 ${this.monster.xp}를 얻었다.`);
                this.hero.getXp(this.monster.xp);
                this.createMonster();
            } else {
                this.printInfo('hero', 'n');
                this.printInfo('monster', 'n');
                this.printMsg(`${this.hero.att}의 데미지를 주고, ${this.monster.att}의 데미지를 받았다.`);
            }
        } else if (event.target['battle-input'].value === '2') { // 회복
            this.hero.heal();
            this.monster.attack(this.hero);
            this.printInfo('hero', 'n');
            this.printMsg(`HP 20을 회복하고, ${this.monster.att}의 데미지를 받았다.`);
            if (this.hero.hp <= 0) { // 1. 캐릭터가 죽었을 때
                this.quit();
                this.printMsg('캐릭터가 전사하였습니다. 캐릭터를 생성해주세요.');
            }
        } else if (event.target['battle-input'].value === '3') { // 도망
            this.changeScreen('menu');
            this.printInfo('monster', 'y');
            this.monster = null;
            $message.textContent = '';
        }
    }
}

class Unit {
    constructor(name, hp, xp, att) {
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.xp = xp;
        this.att = att;
    }
    attack(target) {
        target.hp -= this.att;
    }
}

class Hero extends Unit {
    constructor(game, name) {
        super(name, 100, 0, 10);
        this.game = game;
        this.lev = 1;
    }
    heal() {
        this.hp += 20;
        if (this.hp > this.maxHp) {
            this.hp = this.maxHp;
        }
    }
    getXp(xp) {
        this.xp += xp;
        if (this.xp > this.lev * 15) {
            this.xp -= this.lev * 15;
            this.maxHp += 5;
            this.lev += 1;
            this.att += 5;
            this.hp = this.maxHp;
            this.game.printMsg(`레벨업! ${this.lev}Lv 달성`);
        }
        this.game.printInfo('hero', 'n');
    }
}

class Monster extends Unit {
    constructor(name, hp, xp, att) {
        super(name, hp, xp, att);
    }
}

let game = null;
$startScreen.addEventListener('submit', (event) => {
    event.preventDefault();
    game = new Game(event.target['name-input'].value);
    game.printMsg('');
});

const trpgStart = () => {
    game?.quit();
    game = null;
    $startScreen.querySelector('#name-input').value = '';
}

