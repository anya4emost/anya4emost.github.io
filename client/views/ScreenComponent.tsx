import * as React from "react";
import {observer} from "mobx-react";
import * as cx from "classnames";

@observer
export class Screen extends React.Component {

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

    inputOnChange1 = (event) => {
        const value = event.target.value.substr(-1, 1);
        this.setState({input1: value}, () => {
            if (this.state.input1 == this.state.numberA) {
                this.setState({firstNumberCorrect: true});
            }
        })
    };
    inputOnChange2 = (event) => {
        const value = event.target.value.substr(-1, 1);
        this.setState({input2: value}, () => {
            if (this.state.input2 == this.state.numberB) {
                this.setState({secondNumberCorrect: true});
            }
        })
    };
    inputOnChange3 = (event) => {
        this.setState({input3: event.target.value}, () => {
            if (this.state.input3 == this.state.numberC) {
                this.setState({issueCorrect: true});
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
        })
    };
    randomInteger = (min, max) => {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    };

    componentWillMount() {
        const a = this.randomInteger(6, 9);
        const c = this.randomInteger(11, 14);
        const b = c - a;
        this.setState({numberA: a, numberB: b, numberC: c})
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

                    <If condition={secondNumberCorrect && !issueCorrect}>
                        <div className="issueInput border">
                            <input
                                type="number"
                                value={input3}
                                autoFocus
                                className={inputCClasses}
                                onChange={this.inputOnChange3}/>
                        </div>
                    </If>
                    <If condition={issueCorrect}>
                        <div className="c">
                            {numberC}
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
                                        autoFocus
                                        className={inputAClasses}
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
                                               autoFocus
                                               onChange={this.inputOnChange2}/>
                                    </div>
                                </If>
                                <If condition={secondNumberCorrect}>
                                    <div className="input"
                                         style={{marginLeft: `${13.13 * numberB - 8}px`}}>
                                        {numberB}
                                    </div>
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

