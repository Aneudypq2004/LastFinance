import { IconBrandVisa, IconStars, IconWifi } from '@tabler/icons-react';
import { IcardData } from '../types';
import chip from '/chipCard.png';
import { useEffect, useState } from 'react';

export default function Card({ CardData, isShowBack = false }: { CardData: IcardData, isShowBack?: (boolean) }) {


    const { OwnerCard, NumberCard, CodeSecurity, Expiration } = CardData;

    const [showBack, setShowBack] = useState<boolean>(false);


    useEffect(() => {

        if (isShowBack) {
            setShowBack(true);
        } else {
            setShowBack(false);

        }

    }, [isShowBack])

    return (
        <div onClick={() => setShowBack(!showBack)}

            className={`${showBack ? 'active' : 'rotate-0'}
         w-80  h-60 rounded-2xl relative bg-second text-slate-400 duration-500 transition-all
          ease-out py-4 card`}>

            {showBack ? (
                <div className='relative h-full back'>

                    <p className='h-1/4  w-full bg-black mt-4'></p>

                    <div className='p-2'>

                        <p className='uppercase text-sm'>Authorized signature</p>

                        <div className='w-10/12 relative bg-white mt-4 pr-10'>

                            <div className='w-full bg-amber-400 h-1 mb-1'></div>
                            <div className='w-full bg-amber-400 h-1 mb-1'></div>
                            <div className='w-full bg-amber-400 h-1 mb-1'></div>
                            <div className='w-full bg-amber-400 h-1 mb-1'></div>

                            <p className='absolute top-1 text-black right-1'>{CodeSecurity}</p>

                        </div>

                        <p className='text-xs ml-8 mt-2'>Only valid in EEUU<br /> </p>
                    </div>

                    <IconBrandVisa className='absolute bottom-0 right-2 text-white' size={50} />
                </div>

            ) : (

                <>
                    <h5 className='absolute  top-3 left-4 text-lg flex gap-2 text-naranja'>BANK<IconStars size={20} /></h5>

                    <div className='px-4'>

                        <p className='flex gap-2 text-white my-4 mt-12'>

                            <img src={chip} width={35} alt="Icon Chip Card" />

                            <IconWifi size={30} className='rotate-90' /> </p>

                        <p className='text-3xl text-center'>{NumberCard.slice(0, 4)} **** **** ****</p>

                        <p className='text-white text-center relative text-xs '>VALID<br />THRU
                            <span className='absolute text-sm -bottom-4 text-slate-600'>{Expiration}</span>
                        </p>

                        <p className='absolute  bottom-3 left-4'>{OwnerCard}</p>

                        <IconBrandVisa className='absolute bottom-0 right-2 text-white' size={50} />

                    </div>
                </>
            )}
        </div>)
}
