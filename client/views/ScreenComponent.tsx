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
    };

    inputOnChange = () => {
        if (this.input1.value == this.state.numberA) {
            this.setState({firstNumber: true})
        }
        if(this.input1.value != this.state.numberA){

        }
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

    render() {
        const {numberA, numberB, numberC} = this.state;
        const inputClasses = cx ({
            red: !this.state.firstNumber
        });
        // const aClasses =  cx ("a", {
        //     yellow: this.input1 && this.input1.value != "" && !this.state.firstNumber
        // });
        if (this.input1)console.log(this.state.firstNumber, this.input1.value);
        return (
            <div className="card">
                <div className="task">
                    <div className="a">{numberA}</div>
                    <div>+</div>
                    <div className="b">{numberB}</div>
                    <div>=</div>
                    <div className="c">{numberC}</div>
                </div>
                <div className="pictures">
                    <div>
                        <div className="arcA">
                            <div className="inputA input" style={{marginLeft: `${13.13 * numberA - 8}px`}}>
                                <input
                                    type="number"
                                    className={inputClasses}
                                    ref={(input) => {
                                        this.input1 = input;
                                    }}
                                    onChange={this.inputOnChange}/>
                            </div>
                            <div className="arc"
                                 style={{width: `${26.26 * numberA}px`, height: `${13.13 * numberA}px`}}></div>
                            <div className="arrow down"></div>
                        </div>
                        <If condition={this.state.firstNumber}>
                            <div className="arcB">
                                <div className="inputB input" style={{marginLeft: `${13.13 * numberB - 8}px`}}>
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

