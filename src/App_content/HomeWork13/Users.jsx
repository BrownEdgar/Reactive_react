import React from 'react'
import "./Users.scss"

function Users({user}) {
    return (
      <div className='Users'>
          <div className="Users__group">
            <div className='Users__border'>email</div>
            <span>{user.email}</span>
          </div>
          <div className="Users__group">
            <div className='Users__border'>username</div>
            <span>{user.username}</span>
          </div>
          <div className="Users__group">
            <div className='Users__border'>password</div>
            <span>{user.id}</span>
          </div>
      </div>
    )
}

export default Users