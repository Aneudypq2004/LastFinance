import { useState } from "react";

import useCripto from "../hook/UseCripto";
import { FormatMoney } from "../Helpers";
import Nav from "./Nav";
import { FormatDate } from "../Helpers";

// ICONS
import {
  IconCircleArrowLeft, IconArrowBadgeDown,
  IconCurrencyBitcoin
} from '@tabler/icons-react';

//INTERFACE

import { IcriptoProvider } from '../types/index';
import Logo from "./Logo";


export default function Sidebar() {

  const { expanded, HandleExpandSidebar } = useCripto();
  const [showMoney, setShowMoney] = useState<boolean>(false);

  const { money, moneyBitcoin }: IcriptoProvider = useCripto();

  return (
    <aside className={`bg-second w-48 z-50  transition-all duration-700 ease-in-out fixed h-full text-white pt-8 aside flex flex-col content-center
    ${expanded ? "translate-x-0" : "-translate-x-96 md:translate-x-0"}`}>

      <div className="md:hidden mb-4 w-full pb-4 px-4">

        <h3 className="text-lg font-bold">Good Luck, Luis!</h3>

        <div className="flex justify-between gap-2 text-gray-400 text-sm">

          <p>{new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()}</p>

          <p>{FormatDate(new Date(Date.now()))}</p>

        </div>

        </div>

        {/* ICON EXPANDED */}

        <div className="absolute md:hidden  right-0 -m-3 top-24 cursor-pointer" onClick={HandleExpandSidebar}>

          <IconCircleArrowLeft size={30} />

        </div>

        <Logo />
        <h4 className="mt-8 px-8 py-2 relative h-max">{FormatMoney(money)}

          <IconArrowBadgeDown className="absolute  right-4 top-4 cursor-pointer" onClick={() => setShowMoney(!showMoney)}
          />

          {showMoney ? (
            <div className="absolute p-4 right-0 bg-white rounded flex text-naranja">

              <IconCurrencyBitcoin />

              <p>{moneyBitcoin} BTC </p>

            </div>

          ) : null}
        </h4>

        <Nav />

    </aside>
  )
}
