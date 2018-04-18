import * as React from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";

let A = {
    letter: 'А',
    imgSrc: 'avtomobil',
    soundSrc: 'A',
    soglasnaya: false
};

let B = {
    letter: 'Б',
    imgSrc: 'buldozer',
    soundSrc: 'B',
    soglasnaya: true
};
let W = {
    letter: 'В',
    imgSrc: 'velosiped',
    soundSrc: 'W',
    soglasnaya: true
};
let G = {
    letter: 'Г',
    imgSrc: 'gruzovik',
    soundSrc: 'G',
    soglasnaya: true
};
let D = {
    letter: 'Д',
    imgSrc: 'jeep',
    soundSrc: 'D',
    soglasnaya: true
};
let JE = {
    letter: 'Е',
    imgSrc: 'eraz',
    soundSrc: 'JE',
    soglasnaya: false
};
let JO = {
    letter: 'Ё',
    imgSrc: 'e-mobil',
    soundSrc: 'JO',
    soglasnaya: false
};
let J = {
    letter: 'Ж',
    imgSrc: 'jiguli',
    soundSrc: 'J',
    soglasnaya: true
};
let Z = {
    letter: 'З',
    imgSrc: 'znak',
    soundSrc: 'Z',
    soglasnaya: true
};
let I = {
    letter: 'И',
    imgSrc: 'istrebitel',
    soundSrc: 'I',
    soglasnaya: false
};
let JI = {
    letter: 'Й',
    imgSrc: 'tramvay',
    soundSrc: 'JI',
    soglasnaya: true
};
let K = {
    letter: 'К',
    imgSrc: 'korabl',
    soundSrc: 'K',
    soglasnaya: true
};
let L = {
    letter: 'Л',
    imgSrc: 'limuzin',
    soundSrc: 'L',
    soglasnaya: true
};
let M = {
    letter: 'М',
    imgSrc: 'motozikl',
    soundSrc: 'M',
    soglasnaya: true
};
let N = {
    letter: 'Н',
    imgSrc: 'nomer',
    soundSrc: 'N',
    soglasnaya: true
};
let O = {
    letter: 'О',
    imgSrc: 'omnibus',
    soundSrc: 'O',
    soglasnaya: false
};
let P = {
    letter: 'П',
    imgSrc: 'poezd',
    soundSrc: 'P',
    soglasnaya: true
};
let R = {
    letter: 'Р',
    imgSrc: 'raketa',
    soundSrc: 'R',
    soglasnaya: true
};
let S = {
    letter: 'С',
    imgSrc: 'samolet',
    soundSrc: 'S',
    soglasnaya: true
};
let T = {
    letter: 'Т',
    imgSrc: 'traktor',
    soundSrc: 'T',
    soglasnaya: true
};
let U = {
    letter: 'У',
    imgSrc: 'uprjagka',
    soundSrc: 'U',
    soglasnaya: false
};
let F = {
    letter: 'Ф',
    imgSrc: 'fura',
    soundSrc: 'F',
    soglasnaya: true
};
let H = {
    letter: 'Х',
    imgSrc: 'hlebovoz',
    soundSrc: 'H',
    soglasnaya: true
};
let C = {
    letter: 'Ц',
    imgSrc: 'zementovoz',
    soundSrc: 'C',
    soglasnaya: true
};
let CH = {
    letter: 'Ч',
    imgSrc: 'cheln',
    soundSrc: 'CH',
    soglasnaya: true
};
let SH = {
    letter: 'Ш',
    imgSrc: 'shofer',
    soundSrc: 'SH',
    soglasnaya: true
};
let SHJ = {
    letter: 'Щ',
    imgSrc: 'schetka',
    soundSrc: 'SHJ',
    soglasnaya: true
};
let TV = {
    letter: 'Ъ',
    imgSrc: 'ob\'ezd',
    soundSrc: 'TV',
    soglasnaya: true
};
let Y = {
    letter: 'Ы',
    imgSrc: 'fary',
    soundSrc: 'Y',
    soglasnaya: false
};
let MJA = {
    letter: 'Ь',
    imgSrc: 'rul\'',
    soundSrc: 'MJA',
    soglasnaya: true
};
let E = {
    letter: 'Э',
    imgSrc: 'evakuator',
    soundSrc: 'E',
    soglasnaya: false
};
let JU = {
    letter: 'Ю',
    imgSrc: 'junga',
    soundSrc: 'JU',
    soglasnaya: false
};
let JA = {
    letter: 'Я',
    imgSrc: 'jahta',
    soundSrc: 'JA',
    soglasnaya: false
};
let Letters = [A, B, W, G, D, JE, JO, J, Z, I, JI, K, L, M, N, O, P, R, S, T, U, F, H, C, CH, SH, SHJ, TV, Y, MJA, E, JU, JA];

@observer
export class Screen extends React.Component<{}, {}> {

    @observable audio: any;
    play = (sound: string) => {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        let newAudio = new Audio(`/resources/audio/${sound}.mp3`);
        newAudio.play();
        this.audio = newAudio;
    };

    render() {

        const ABC = Letters.map((item, index) => (
            <div onClick={() => {
                this.play(item.soundSrc)
            }}
                 onDoubleClick={() => {
                     item.soundSrc == "TV" || item.soundSrc == "Y" || item.soundSrc == "MJA" ? window.location.href = `/` : window.location.href = `/letter/${item.soundSrc}`
                 }}>
                <span className={item.soglasnaya ? 'blue' : 'red'}>{item.letter}</span>
                <img src={`../resources/images/${item.imgSrc}.jpg`}/>
            </div>
        ));
        return (
            <div className="display">
                {ABC}
            </div>
        )
    }
}
