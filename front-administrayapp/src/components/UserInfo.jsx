import React from 'react'
import Cookies from 'universal-cookie'
import user from "../images/user.svg"

export default function UserInfo() {
    const cookies = new Cookies()
    return (
        <div>
            <div id="userName">Usuario: {cookies.get('name')}  <img src={user} alt="user" width="20" />
            </div>
            <div>
                
            </div>
        </div>
    )
}
