import React from 'react'
import { Link } from 'react-router'

export default function Navigation() {
  return (
    <div className='navContainer'>
      <ul>
        <li className='link'><Link to='/'>{'Home'}</Link></li>
      </ul>
    </div>
  )
}
