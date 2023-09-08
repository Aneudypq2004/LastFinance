import { createContext, useState, useEffect, ReactNode } from "react";
import { IcriptoProvider, initialValue } from '../types/index';

// CONTEXT
const CriptoContext = createContext<IcriptoProvider>(initialValue);

const CriptoProvider = ({ children }: { children: ReactNode }) => {

    const [money, setMoney] = useState<number>(5000);
    const [expanded, setExpanded] = useState<boolean>(false);
    const [moneyBitcoin, setMoneyBitcoin] = useState<number>(0);
    const [error, setError] = useState({ error: "", active: false });
    const [isOpen, setIsOpen] = useState<boolean>(false);

    //HANDLE MODAL 

    const HandleModal = (open: boolean) => setIsOpen(open);

    // CHANGE THE MOUNT OF MONEY

    const handleChangeMoney = (mount: number) => setMoney(mount);

    // OPEN SIDEBAR IN MOBILE DEVICE

    const HandleExpandSidebar = () => {
        setExpanded(!expanded);
    }

    // CONSULT DE PRICE OF BITCOIN

    useEffect(() => {

        const ConsultPrice = async () => {

            try {
                const request = await fetch("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD");

                const response: { USD: number } = await request.json();

                // USD TO BTC

                setMoneyBitcoin(Number((money / response.USD).toFixed(4)));

            } catch (e) {

                setError({
                    error: "SOMETHING IS WRONG",
                    active: true
                });
            }
        }

        ConsultPrice();

    }, [money])


    return (
        <CriptoContext.Provider
            value={{
                money,
                moneyBitcoin,
                isOpen,
                error,
                HandleModal,
                handleChangeMoney,
                expanded,
                HandleExpandSidebar
            }}
        >

            {children}

        </CriptoContext.Provider>
    )
}

export default CriptoContext;

export {
    CriptoProvider
}