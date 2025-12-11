import React from 'react'
import LeftBar from '../../features/shell/components/LeftBar'
import MainBar from '../../features/shell/components/MainBar'
import MainPanel from '../../features/shell/components/MainPanel'

const MainLayout = () => {
  return (
    <div >
        <LeftBar />
        <MainBar />
        <MainPanel />
    </ div>
  )
}

export default MainLayout