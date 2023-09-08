import { useContext } from 'react';
import CriptoContext from '../context/CriptoProvider';
import { IcriptoProvider } from '../types';

const useCripto = (): IcriptoProvider => {

    const context = useContext(CriptoContext);

    return context;
}


export default useCripto;