import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"
UserContext

function Profile() {

    const {user} = useContext(UserContext)
    if (!user) {
        return <div>Plz login</div>
    }
    return <div>Welcome {user.username}</div>
}

export default Profile
