import { Interaction } from "../../../../../model/Interaction";

export interface TreeProps{
    interactionList : Interaction[];
}

export interface TreeState{
    welcome : Interaction | any;
}