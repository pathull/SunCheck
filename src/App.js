import './App.css';
import Search from './components/search-city';
import Header from './components/Header';
import PresentWeather from './components/present-weather';

function App() {

  const onSearchChangesHandler = (data) => {
    console.log(data)
  }
  return (
    <div>
      <Header />
      <div className="container">
        <Search onSearch={onSearchChangesHandler} />
        <PresentWeather />
      </div>
    </div>
  );
}

export default App;
