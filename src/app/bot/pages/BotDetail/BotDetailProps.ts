import { I18nProps } from './../../../i18n/interface/i18n.interface';
import { Bot } from '../../../../model/Bot';
import { Interaction } from '../../../../model/Interaction';
import { BotAttribute } from '../../../../model/BotAttribute';
import { RouteComponentProps } from 'react-router';
import { User } from 'kissbot-core';

interface pendingPublicationProps {
    pendingFlows: boolean;
    pendingEntities: boolean;
}

export interface BotDetailProps extends RouteComponentProps, I18nProps {
    setCurrentExecutingInteraction: (...params: any) => any;
    setCurrentInteraction: (...params: any) => any;
    setValidateInteraction: (...params: any) => any;
    setInteractionList: (...params: any) => any;
    setBotAttributes: (botAttributes: Array<BotAttribute>) => any;
    setBotList: (...params) => any;
    setCurrentBot: (...params: any) => any;
    setChannelList: (...params: any) => any;
    currentInteraction: Interaction;
    unchangedInteraction?: Interaction;
    validateInteraction: Interaction;
    setWorkspaceBots: Function;
    setEntities: Function;
    loggedUser: User;
    botList: any[];
    interactionList: any[];
}

export interface BotDetailState {
    bot: Bot | undefined;
    treeZoom: number;
    currentExternalInteractionId: string | undefined;
    showActivityInfo: boolean;
    activity: any;
    modalRevert: boolean;
    loadingDisabledPublish: boolean;
    viewPending: boolean;
    collapseType?: 'expanded' | 'collapsed';
    interactionsPendingPublication: any[];
    pendingPublication?: pendingPublicationProps;
}
