import { createContext, useState, ReactNode } from 'react'
import { IuserDefinition, userInitialValues } from '../types';

const UserContext = createContext<IuserDefinition>(userInitialValues);

const UserProvider = ({ children }: { children: ReactNode }) => {

    const [Name, setName] = useState("Luis Aneudy De Los Santos");
    const [Email, setEmail] = useState("");
    const [Location, setLocation] = useState("Dominican Republic ");

    return (
        <UserContext.Provider
            value={{
                Name,
                Email,
                Location
            }}>

            {children}

        </UserContext.Provider>
    )
}

export default UserContext;

export {
    UserProvider
}