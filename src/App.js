import './App.css';
import Profile from './profile/compProfile';

//variables
const para = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel consectetur arcu, id fringilla turpis. Cras ornare hendrerit rhoncus. Donec."
const x = 7;
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Profile fullName='Cho Kyu-hyun' bio={para} profession='Kpop singer' >
          <img src='https://i.pinimg.com/originals/3f/61/50/3f61503c4e39c46714b00df138d4259c.jpg' alt='kyuhyun' height='300px' />
        </Profile>
      </header>
    </div >
  );
}

export default App;
