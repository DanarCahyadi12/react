
import "./style/nav.css"
import "./style/index.css"
import Navbar from './components/navbar';
import Index from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section className='container'>
        <Index/>
      </section>
    </div>
  );
}

export default App;
