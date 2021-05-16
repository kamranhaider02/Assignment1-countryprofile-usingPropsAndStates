import './App.css';
import CountryList from './Components/CountryList';
import Footer from './Components/Footer';
import Header from './Components/Header';
import pk from './Images/Flags/pk.png';
import pk_map from './Images/Maps/pk-map.png';
import ind from './Images/Flags/ind.png';
import ind_map from './Images/Maps/ind-map.png';
function App() {
  const fblink = "https://web.facebook.com/kamrankhosa007";
  let countries =[['Pakistan',pk,pk_map,"Pakistan,[c] officially the Islamic Republic of Pakistan,[d] is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million, and has the world's second-largest Muslim population. Pakistan is the 33rd-largest country by area, spanning 881,913 square kilometres (340,509 square miles). It has a 1,046-kilometre (650-mile) coastline along the Arabian Sea and Gulf of Oman in the south and is bordered by India to the east, Afghanistan to the west, Iran to the southwest, and China to the northeast. It is separated narrowly from Tajikistan by Afghanistan's Wakhan Corridor in the northwest, and also shares a maritime border with Oman."],['India',ind,ind_map,"India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya),[23] is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[f] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar and Indonesia."]];
  return (
    <div className="App">
      <Header />
      <CountryList list={countries}/>
      <Footer fblink={fblink}/>
    </div>
  );
}

export default App;
