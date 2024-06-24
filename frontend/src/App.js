import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import Home from './screens/Home'

const App = () => {
  return (
    <>
    <Header ></Header>
    <main className='py-3'>
      <Container>
      <Home></Home>
      </Container>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App