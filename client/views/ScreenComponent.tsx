import * as React from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";
import * as cx from "classnames";

@observer
export class Screen extends React.Component {
    @observable input1;
    @observable input2;
    @observable input3;
    state = {
        firstNumberCorrect: false,
        secondNumberCorrect: false,
        issueCorrect: false,
        numberA: undefined,
        numberB: undefined,
        numberC: undefined,
        input1: "",
        input2: "",
        input3: ""
    };

    inputOnChange1 = () => {
        const value = this.input1.value.substr(-1, 1);
        this.setState({input1: value}, () => {
            if (Number(this.state.input1) == this.state.numberA) {
                this.setState({firstNumberCorrect: true})
            }
        })
    };
    inputOnChange2 = () => {
        const value = this.input2.value.substr(-1, 1);
        this.setState({input2: value}, () => {
            if (Number(this.state.input2) == this.state.numberB) {
                this.setState({secondNumberCorrect: true}, () => {
                    this.input1.autofocus = false;
                    this.input2.autofocus = true;
                });

            }
        })
    };
    inputOnChange3 = () => {
        this.setState({input3: this.input3.value}, () => {
            console.log(this.state.input3, this.state.numberC);
            if (Number(this.state.input3) == this.state.numberC) {
                this.setState({issueCorrect: true});
                this.input3.autofocus = true;
            }
        })
    };
    randomInteger = (min, max) => {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    componentWillMount() {
        const a = this.randomInteger(6, 9);
        const c = this.randomInteger(11, 14);
        const b = c - a;
        this.setState({numberA: a, numberB: b, numberC: c})
    }

    componentDidMount() {
        this.input1.autofocus = true;
    }

    render() {
        const {numberA, numberB, numberC, input1, input2, input3, firstNumberCorrect, secondNumberCorrect, issueCorrect} = this.state;
        const inputAClasses = cx({
            red: !firstNumberCorrect
        });
        const inputBClasses = cx({
            red: !secondNumberCorrect
        });
        const inputCClasses = cx({
            red: !issueCorrect
        });
        const aClasses = cx("a", {
            yellow: input1 != "" && !firstNumberCorrect
        });
        const bClasses = cx("a", {
            yellow: input2 != "" && !secondNumberCorrect
        });

        return (
            <div className="card">
                <div className="task">
                    <div className={aClasses}>{numberA}</div>
                    <div>+</div>
                    <div className={bClasses}>{numberB}</div>
                    <div>=</div>
                    <If condition={!secondNumberCorrect}>
                        <div className="c">?</div>
                    </If>

                    <If condition={secondNumberCorrect}>
                        <div className="issueInput border">
                            <input
                                type="number"
                                value={input3}
                                className={inputCClasses}
                                ref={(input) => {
                                    this.input3 = input;
                                }}
                                onChange={this.inputOnChange3}/>
                        </div>
                    </If>

                </div>
                <div className="rules_with_arcs">
                    <div>
                        <div className="arcA">
                            <If condition={!firstNumberCorrect}>
                                <div className="input border" style={{marginLeft: `${13.13 * numberA - 8}px`}}>
                                    <input
                                        type="number"
                                        value={input1}
                                        className={inputAClasses}
                                        ref={(input) => {
                                            this.input1 = input;
                                        }}
                                        onChange={this.inputOnChange1}/>
                                </div>
                            </If>
                            <If condition={firstNumberCorrect}>
                                <div className="input"
                                     style={{marginLeft: `${13.13 * numberA - 8}px`}}>{numberA}</div>
                            </If>
                            <div className="arc"
                                 style={{width: `${26.26 * numberA}px`, height: `${13.13 * numberA}px`}}></div>
                            <div className="arrow down"></div>
                        </div>
                        <If condition={this.state.firstNumberCorrect}>
                            <div className="arcB">
                                <If condition={!secondNumberCorrect}>
                                    <div className="input border"
                                         style={{marginLeft: `${13.13 * numberB - 8}px`}}>
                                        <input type="number"
                                               value={input2}
                                               className={inputBClasses}
                                               ref={(input) => {
                                                   this.input2 = input;
                                               }}
                                               onChange={this.inputOnChange2}/>
                                    </div>
                                </If>
                                <If condition={secondNumberCorrect}>
                                    <div className="input"
                                         style={{marginLeft: `${13.13 * numberB - 8}px`}}>{numberB}</div>
                                </If>
                                <div className="arc" style={{
                                    width: `${26.26 * numberB}px`,
                                    height: `${13.13 * numberB}px`
                                }}></div>
                                <div className="arrow down"></div>
                            </div>
                        </If>
                    </div>
                    <div className="ruler"><img src=".\resources\images\sprite.png"/></div>
                </div>
            </div>
        )
    }
}

