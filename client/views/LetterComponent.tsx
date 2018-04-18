import * as React from "react";
import {withRouter} from "react-router";

const withR: any = withRouter;

@withR
export class Letter extends React.Component<Props, {}> {
    play = (sound: string) => {
        let newAudio = new Audio(`/resources/audio/${sound}.mp3`);
        newAudio.play();
    };
    back = () =>{

        this.play('back');
        setTimeout(()=>{window.location.href = `/`}, 50);
    };
    render() {
        return (
            <div className="pictures">
                <div onClick={this.back}><img className="arrow" src={`../resources/images/arrow.jpg`}/></div>
                <div><img src={`../resources/images/${this.props.match.params.letter}.jpg`}/></div>
            </div>
        );
    }
}

interface Props {
    match?: any;
}