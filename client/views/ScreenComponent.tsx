import * as React from "react";
import {observer} from "mobx-react";
import {observable} from "mobx";
import * as cx from "classnames";

@observer
export class Screen extends React.Component {
    @observable input1;
    state = {
        firstNumber: false,
        secondNumber: false,
        numberA: undefined,
        numberB: undefined,
        numberC: undefined,
        input1: ""
    };

    inputOnChange = () => {
        const value = this.input1.value.substr(-1,1);
        this.setState({input1: value}, ()=> {if (Number(this.state.input1) == this.state.numberA) {
            this.setState({firstNumber: true}, ()=>console.log(this.state.firstNumber))}})
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
    componentDidMount(){

    }

    render() {
        const {numberA, numberB, numberC, input1, firstNumber} = this.state;
        const inputClasses = cx({
            red: !this.state.firstNumber
        });
        const aClasses = cx("a", {
            yellow: this.state.input1 != "" && !this.state.firstNumber
        });
        //console.log(this.state.firstNumber, this.state.input1);
        return (
            <div className="card">
                <div className="task">
                    <div className={aClasses}>{numberA}</div>
                    <div>+</div>
                    <div className="b">{numberB}</div>
                    <div>=</div>
                    <div className="c">{numberC}</div>
                </div>
                <div className="pictures">
                    <div>
                        <div className="arcA">
                            <If condition={!firstNumber}>
                                <div className="inputA input border" style={{marginLeft: `${13.13 * numberA - 8}px`}}>
                                    <input
                                        type="number"
                                        value={input1}
                                        className={inputClasses}
                                        ref={(input) => {
                                            this.input1 = input;
                                        }}
                                        onChange={this.inputOnChange}/>


                                </div>
                            </If>
                            <If condition={firstNumber}>
                                <div className="inputA input" style={{marginLeft: `${13.13 * numberA - 8}px`}}>{numberA}</div>
                            </If>


                            <div className="arc"
                                 style={{width: `${26.26 * numberA}px`, height: `${13.13 * numberA}px`}}></div>
                            <div className="arrow down"></div>
                        </div>
                        <If condition={this.state.firstNumber}>
                            <div className="arcB">
                                <div className="inputB input border" style={{marginLeft: `${13.13 * numberB - 8}px`}}>
                                    <input type="number"/>
                                </div>
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

