import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userid} = useParams()
    return (
        <div className=''>User : {userid} </div>
    )
}

export default User
