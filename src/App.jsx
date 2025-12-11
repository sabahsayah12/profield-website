import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'

function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

import ScrollToAnchor from './components/ScrollToAnchor'

import ServiceDetail from './components/ServiceDetail'

function App() {
  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  )
}

export default App
