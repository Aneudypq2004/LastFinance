// ======================== INTERFACES =====================

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
    }
}

export const userInitialValues: IuserDefinition = {
    Name: "Luis Aneudy De Los Santos",
    Email: "Dluis@gmail.com",
    Location: "Domican Republic"
}

