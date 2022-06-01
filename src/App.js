import Buttons from './Components/Buttons';
import MainPage from './Components/MainPage';
import Header from './Components/Header';

function App() {
  const me = {
    name: 'Cosmin Nae',
    age: new Date().getFullYear() - 2000,
    learned: ['HTML', 'CSS', 'JavaScript', 'React'],
    passionate: true,
    hobbies: ['Gaming', 'Technology', 'Programming'],
  };

  return (
    <div>
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
