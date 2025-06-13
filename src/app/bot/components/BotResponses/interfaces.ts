import { IResponse } from "../../../../model/Interaction";
import { Component } from "react";

export interface BotResponseProps{
    response: IResponse | any;
    onChange: (response: IResponse) => any;
    submitted: boolean;
    onCreateAttribute: (...params)=> any;
}

export class BotResponse extends Component<BotResponseProps>{}
