import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <>
    <Header ></Header>
    <main className='py-3'>
      <Container>
      <h1>Hello user</h1>
      </Container>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App