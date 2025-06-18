import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    //jo bhi api call's vgera data h use value mei pass kardo
    const [user, setUser] = React.useState(null) 

    return (
        <UserContext.Provider value={{user,setUser}}>
         {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
