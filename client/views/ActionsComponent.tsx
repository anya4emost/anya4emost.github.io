import * as React from "react";
import {Calculations} from "../store/screenStore";
import {inject} from "mobx-react";

@inject ("calculations")
export class Actions extends React.Component<Props, {}> {
    render() {
        return (
            <div className="actions">
                <div onClick={() => this.props.calculations.enterTheNumber("/")}>/</div>
                <div onClick={() => this.props.calculations.enterTheNumber("*")}>*</div>
                <div onClick={() => this.props.calculations.enterTheNumber("+")}>+</div>
                <div onClick={() => this.props.calculations.enterTheNumber("-")}>-</div>
                <div onClick={() => this.props.calculations.enterTheNumber("%")}>%</div>
                <div onClick={this.props.calculations.toCalculate}>=</div>
            </div>
        );
    }
}

interface Props {
    calculations?: Calculations;
}