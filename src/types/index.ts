// ======================== INTERFACES =====================

import { Dispatch, SetStateAction } from "react";

export interface IcriptoProvider {
    money: number;
    moneyBitcoin: number;
    isOpen: boolean;
    HandleModal: (open: boolean) => void;
    handleChangeMoney: (mount: number) => void;
    HandleExpandSidebar: () => void;
    expanded: boolean;
    error: {
        error: string;
        active: boolean;
    }
    openModalCard: boolean;

    close: boolean;
    notification: boolean;   

    setOpenModalCard: Dispatch<React.SetStateAction<boolean>>;
    setNotification: Dispatch<React.SetStateAction<boolean>>;
    setClose: Dispatch<React.SetStateAction<boolean>>;
}


export interface IcardData {
    cardId: string
    OwnerCard: string
    NumberCard: string
    CodeSecurity: string
    Expiration: string
    Saldo?: number
}


export interface IuserDefinition {
    Name: string;
    Email: string;
    Location: string;
    setName?: Dispatch<SetStateAction<string>>
    setEmail?: Dispatch<SetStateAction<string>>
    setLocation?: Dispatch<SetStateAction<string>>
}

export interface IapiCripto {

    USD: {
        DISPLAY: String
        HIGHDAY: String
        LOWDAY: String,
        PRICE:String
        IMAGEURL: String
    }

}

// ======================== INITIAL VALUES ======================

export const initialValue: IcriptoProvider = {

    money: 0,
    moneyBitcoin: 0,
    isOpen: false,
    HandleModal: (open: boolean) => { open },
    handleChangeMoney: (mount: number) => mount,
    HandleExpandSidebar: () => { },
    expanded: false,
    error: {
        error: "",
        active: false
    },

    openModalCard: false,
    notification: false,
    close: false,
    setClose: () => {} ,
    setOpenModalCard: () => {} ,
    setNotification: () => {} 
}

export const userInitialValues: IuserDefinition = {
    Name: "Luis Aneudy De Los Santos",
    Email: "Dluis@gmail.com",
    Location: "Domican Republic"
}

