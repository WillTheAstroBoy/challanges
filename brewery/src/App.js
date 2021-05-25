import { useEffect, useState } from 'react';
import Brewery from './components/brewery';
import BreweryCard from './components/breweryCard';
import Loading from './components/loading';
import './App.css';
import DetailPage from './components/detailPage';

function App() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ error, setError ] = useState('');
  const [ breweryData, setBreweryData ] = useState(null);
  const [ breweryCardsHtml, setBreweryCardsHtml ] = useState(null);
  const [ type, setType ] = useState('');
  const [ city, setCity ] = useState('');
  const [ detailPageVisible, setDetailPageVisible ] = useState(false);
  const [ detailPageData, setDetailPageData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(false);

  function showDetailPage(clickedId){
    setDetailPageData(null);
    const data = breweryData.find(({id}) => clickedId===id ); 
    setDetailPageData(data);
    setDetailPageVisible(true);
  }

  function handleSubmit(e){
    e.preventDefault();
    setIsLoading(true);
    const api = 'https://api.openbrewerydb.org/breweries?by_name='+searchTerm.replaceAll(' ', '%');
    fetch(api)
      .then(res => res.json())
      .then(data => {
        setBreweryData(data);
        setIsLoading(false);
      })
      .catch(err => setError(err));
  }

  function handleFilter(){
    let filteredData = breweryData;
    if(type !== '' & city !== ''){
      filteredData = breweryData?.filter(brewery => type.toLowerCase() === brewery.brewery_type.toLowerCase() && city.toLowerCase() === brewery.city.toLowerCase());
    } else if( type !== ''){
      filteredData = breweryData?.filter(brewery => type.toLowerCase() === brewery.brewery_type.toLowerCase());
    } else if(city !== '') {
      filteredData = breweryData?.filter(brewery => city.toLowerCase() === brewery.city.toLowerCase());
    }
    setBreweryCardsHtml(filteredData.map(brewery => <BreweryCard showDetailPage={showDetailPage} key={brewery.id} brewery={brewery} />));
  }



  useEffect(()=>{
    document.title = 'BreweryApp';
    setBreweryCardsHtml(breweryData?.map(brewery => <BreweryCard showDetailPage={showDetailPage} key={brewery.id} brewery={brewery} />));
  }, [breweryData]);

  console.log(breweryCardsHtml);
  return (
    <>
      <div className='header'>
        <p>Brewery App</p>
      </div>
      <p style={{textAlign: "center", marginBottom:"0"}}>Search for breweries list based off keywords.</p>
      <Brewery 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleSubmit={handleSubmit} 
        type={type}
        city={city}
        setCity={setCity}
        setType={setType} 
        handleFilter={handleFilter}
      />
      <ul className="brewery-cards">
        { !isLoading ? breweryCardsHtml.length !== 0 ? breweryCardsHtml : <h2>No Brewery Found!</h2> : <Loading />}
      </ul>
      {detailPageVisible && <DetailPage pageVisible={detailPageVisible} setPageVisible={setDetailPageVisible} brewery={detailPageData}  />}
    </>
  );
}

export default App;
