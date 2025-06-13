import { Interaction } from "../../../../../model/Interaction";

export interface TreeHeaderDraggableWrapperProps{
    interaction : Interaction;
    isExecuting?:boolean;
    connectDragSource : (...params) => any;
}