import React from 'react'
import './RSidebar.css'

const RSidebar = () => {
  return (
    <div>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"></link>
      <div className='rSidebar'>
        <div className='rlogo'>
        <i class="uil uil-user-square"></i>
            <span>
                <span><a href='#logout'>LOGOUT</a></span>
            </span>
        </div>
      </div>
    </div>
  )
}

export default RSidebar



