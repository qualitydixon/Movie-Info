import React from 'react'
import { Link } from 'react-router'

export default function Navigation() {
  return (
    <div className='navContainer'>
      <div className='title'>
        <h2>{'Search for you favorite movies.'}</h2>
        <p>{'Click a poster to get more info.'}</p>
      </div>
      <ul>
        <li className='link'><Link style={{ color: 'white' }} to='/'>{'Home'}</Link></li>
        <li><a target='_blank' href='https://github.com/qualitydixon'>
          <i className='fa fa-github icon'></i></a></li>
        <li><a target='_blank' href='https://twitter.com/dixonbydesign'>
          <i className='fa fa-twitter icon'></i></a></li>
      </ul>
    </div>
  )
}
