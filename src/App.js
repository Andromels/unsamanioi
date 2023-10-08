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
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Services</a>
        <a href='#'>Why</a>
        </div>
      </header>
      <section className='gallery'>
        <h1>PAST WORKS</h1>
        <p>I decide and there's nothing you can do but die.
          "You Pay, I just sleep all damn day"
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
      <section className='footer'>
      

      </section>
    </div>
  );
}

export default App;
