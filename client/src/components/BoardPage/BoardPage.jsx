import './BoardPage.css';
import NavBar from '../NavBar/NavBar'
import Banner from '../Banner/Banner';
import BoardGrid from '../BoardGrid/BoardGrid';
import Footer from '../Footer/Footer';

const BoardPage = () => {
  return (
    <div className='BoardPage'>
      <NavBar />
      <Banner/>
      <BoardGrid/>
      <Footer />
    </div>
  )
}

export default BoardPage;
