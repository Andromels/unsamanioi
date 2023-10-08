import './App.css';
import perfume from './images/perfume.jpg'
import perfume2 from './images/perfume2.jpg'
import perfume3 from './images/perfume3.jpg'
import pic1 from './images/pic1.jpg'
import pic2 from './images/pic1.jpg'
import pic3 from './images/pic1.jpg'
function App() {
  return (
    <div className='app'>
      <header className='navbar'>
        <div className='logo'>
          <h3>ANDROMEL RAMIREZ</h3>
        </div>
        <div className='links'>
        <a href='#home'>Home</a>
        <a href='#aboutus'>About Us</a>
        <a href='#services'>Services</a>
        <a href='#why'>Why</a>
        </div>
      </header>
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
       <div className='images'>
       <img src={pic1}/>
       <img src={pic2}/>
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
