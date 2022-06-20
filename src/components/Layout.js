import React from 'react'
import Header from './Header'
import classes from './Layout.module.scss'


const Layout = () => {
  return (
    <>
        <Header />
        <div className={classes.container}></div>
    </>
  )
}

export default Layout