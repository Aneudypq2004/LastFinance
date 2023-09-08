import UserContext from "../context/UserProvider";
import { useContext } from 'react'
import { IuserDefinition } from "../types";


const UseUser = (): IuserDefinition => useContext(UserContext);


export default UseUser;