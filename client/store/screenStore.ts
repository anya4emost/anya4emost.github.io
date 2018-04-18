import {computed, observable} from "mobx";

const isCorrectKey = (key: any) => {
    const arr = ['.', '+', '-', '*', '/'];
    return key >= 0 && key <= 9 || arr.indexOf(key) != -1;
};


export class Calculations {
    @observable screen: string = '';
    @observable previous: string;

    @computed
    get displayedScreen() {
        return this.screen || '0';
    }

    @computed
    get previousCalculations() {
        return this.previous
    };

    hasDot = (screen: string) => {
        let a = screen.split(/[-+*/]/);
        if (a[a.length - 1].indexOf(".") == -1) {
            return false
        }
        return true
    };
    nullBefore=(screen: string)=>{
        let a = screen.split(/[-+*/]/);
        if (a[a.length - 1] !== "0") {
            return false
        }
        return true
    };

    enterTheNumber = (param: string) => {
        if (!this.screen && param == '.') {
            this.screen = "0" + param;
            return
        }
        if(param == "0" && this.nullBefore(this.screen)){
            return
        }
        if (this.screen == "0" && param == "0") {
            return
        }
        if (param == '.' && this.hasDot(this.screen)) {
            return
        }
        this.screen += param;
    };

    manualInput = (event: any) => {

        if (isCorrectKey(event.key)) {
            if (event.key == '.' && this.hasDot(this.screen)) {
                return
            }
            if (!this.screen && event.key == '.') {
                this.screen = "0" + event.key;
                return
            }
            if(event.key == "0" && this.nullBefore(this.screen)){
                return
            }
            if (this.screen == "0" && event.key == "0") {
                return
            }
            this.screen += event.key.toString();
        }

        if (event.key == "=" || event.keyCode == 13) {
            this.toCalculate();
        }
        if (event.keyCode == 8) {
            this.screen = this.screen.slice(0, -1);
        }
    };

    reset = () => {
        if (this.screen) {
            this.previous = this.screen;
        }
        this.screen = "";
    };
    calculatingInterest = () => {
        if (this.screen.indexOf("%") == -1) return;
        let a = this.screen.split(/[-+*/]/);
        let p = -1;
        let results: Array<number> = [];
        let catPositions: Array<number> = [];
        let lengthCatPositions: Array<number> = [];
        a.forEach((item, i) => {
                if (item.indexOf("%") !== -1) {
                    p = this.screen.indexOf("%", p + 1);
                    catPositions.push(p);
                    let sign = this.screen.charAt(p - item.length);
                    switch (sign) {
                        case '+':
                            let b = Number(a[i - 1]);
                            let c = Number(a[i].slice(0, -1)) * b / 100;
                            let d = b + c;
                            console.log(d);
                            results.push(d);
                            lengthCatPositions.push(a[i].length + a[i - 1].length + 1);
                            break;

                        case '-':
                            let e = Number(a[i - 1]);
                            let f = Number(a[i].slice(0, -1)) * e / 100;
                            let g = e - f;
                            lengthCatPositions.push(a[i].length + a[i - 1].length + 1);
                            results.push(g);
                            break;

                        case '*':
                            let h = Number(a[i].slice(0, -1)) / 100;
                            lengthCatPositions.push(a[i].length);
                            results.push(h);
                            break;

                        default:
                            let j = Number(a[i].slice(0, -1)) * 100;
                            lengthCatPositions.push(a[i].length);
                            results.push(j);
                            break
                    }
                }
            }
        );
        for (let i = results.length - 1; i > -1; i--) {
            let begin = this.screen.substr(0, catPositions[i] - lengthCatPositions[i] + 1);
            let end = this.screen.substr(catPositions[i] + 1);
            this.screen = begin + results[i].toString() + end;
        }
        return this.screen;
    };
    toCalculate = () => {
        if (this.screen) {
            this.previous = this.screen + "=";
        }
        this.calculatingInterest();
        this.screen = eval(this.screen).toString();
    }
}

export default new

Calculations();