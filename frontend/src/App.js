import React from 'react'
import Header from './components/Headers'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';


const App = () => {

  return (
    <>
      {/* <ToastContainer /> */}
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;