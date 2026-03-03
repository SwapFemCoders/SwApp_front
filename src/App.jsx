import { useState } from 'react'
import './App.css'
import LandingPage from './components/pages/LandingPage/LandingPage'
import ArticleCard from './components/molecules/ArticleCard/ArticleCard'

function App() {

  return (
    <>
        <LandingPage/>
        <ArticleCard />
    </>
  )
}

export default App
