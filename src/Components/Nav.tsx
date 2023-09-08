import { IconCategory2, IconWallet, IconSettings, IconCreditCard } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {

    const [enabled, setEnabled] = useState<boolean>(false);

    return (

        <nav className="flex flex-col nav gap-3 mt-8">

            <NavLink className="px-8 py-2 flex gap-2" to="/" >

                <IconCategory2 />
                Overview

            </NavLink>

            <NavLink className="px-8 py-2 flex gap-2" to="/wallet" >

                <IconWallet />
                Wallet

            </NavLink>

            
            <NavLink className="px-8 py-2 flex gap-2" to="/cards" >

                <IconCreditCard />

                Cards

            </NavLink>

            <NavLink className="px-8 py-2 flex gap-2" to="/settings">

                <IconSettings />
                
                Settings

            </NavLink>          

        </nav>
    )
}
