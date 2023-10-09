import './App.css';
import perfume from './images/perfume.jpg'
import perfume2 from './images/perfume2.jpg'
import perfume3 from './images/perfume3.jpg'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic1.jpg'
import pic3 from './images/pic1.jpg'
import mypic from './images/mypic.jpg'
import Navbar from './component/navbar';
function App() {
  return (
    <div className='app'>
      <Navbar/>
      <section className='gallery'>
        <h1>PAST WORKS</h1>
        <p>"A fresh perspective for potential clients"
        </p>
      </section>
      <section className='sec1'> 
        <img src={perfume}/>
        <img src={perfume2}/>
        <img src={perfume3}/>
      </section>
      <section className='sec2'> 
       <h1>RECENT WORKS</h1>
       <p>This is me</p>
       <div className='images'>
       <img src={pic2}/>
       <img src={mypic}/>
       <img src={pic3}/>
       </div>
      </section>
      <div className="footer">
      <div className="bottom_text">
        <p>Copyright © 2023 <a href="#">ANDROMEL RAMIREZ</a>All rights reserved</p>
        <div class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
