import { useState } from 'react';
import styles from './App.module.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Construction from './Components/Construction/Construction';
import Reservation from './Components/Reservation/Reservation';


function App() {

  /*
    NOTE: 
    Page handling should be done using react router dom
    it is done using the following method for simplicity
  */
  const [page, setPage] = useState('home');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <div className={styles.appcontainer}>

      <Header onPageChange={handlePageChange} />
      {(page === 'home' && <Main />)}
      {(page === 'reservations' && <Reservation />)}
      {(page !== 'home' && page !== 'reservations' && <Construction />)}
      <Footer />
      
    </div>
  );
}

export default App;
