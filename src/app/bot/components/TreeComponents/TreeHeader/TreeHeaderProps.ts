import { I18nProps } from './../../../../i18n/interface/i18n.interface';
import { Interaction } from "../../../../../model/Interaction";
import { RouteComponentProps } from "react-router";
import { Bot, User } from 'kissbot-core';
import { Workspace } from '../../../../../model/Workspace';

export interface TreeHeaderProps extends RouteComponentProps, I18nProps{
    interactionList : Array<Interaction>;
    interaction : Interaction;
    currentInteraction : Interaction;
    isExecuting?: boolean;
    currentBot: any;
    botList: Bot[];
    workspaceList: Workspace[];
    loggedUser: User;
    setInteractionList: (...params) => any;
    setCurrentInteraction: (...params) => any;
    setValidateInteraction: (...params) => any;
}

export interface TreeHeaderState{
    isHoveringNameContainer : boolean;
    isOpenedModalDelete : boolean;
    isOpenedModalCopy : boolean;
}