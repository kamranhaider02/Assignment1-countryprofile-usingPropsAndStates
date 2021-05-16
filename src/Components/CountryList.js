import React, { useState } from "react";

const CountryList = (props) => {
  const [country, setcountry] = useState("");
  let selectedCountry = [];
  let allCountries = [];
  for (let i = 0; i < props.list.length; i++) {
    allCountries[i] = props.list[i][0];
    if (country !== "" && props.list[i][0] === country) {
      selectedCountry = props.list[i];
    }
  }
  let [countryName, countryFlag, countryMap,countryDetails] = selectedCountry;
  let selectedCountryforDetails = ()=>{
    return ( <div className="country-details">
    <h1 className="country-name">You selected <span>{countryName}</span></h1>
   <br />
   <img src={countryFlag} alt={countryName} className="country-flag"/>
   <img src={countryMap} alt={countryName} className="country-map"/>
   <p className="clear"></p>
   <h3>About</h3>
   {countryDetails}
   </div>);
  }
  return (
    <div>
      <h1>Select a Country to see its details</h1>
     <div>
     <form>
        <select onChange={(e) => setcountry(e.target.value)}>
          <option value="">Select Country</option>
          {allCountries.map((eachCountry) => (
            <option value={eachCountry} key={eachCountry}>
              {eachCountry}
            </option>
          ))}
        </select>
      </form>
     </div>
     {country !=='' ? selectedCountryforDetails():'Please select a country from dropdown'}
    </div>
  );
};

export default CountryList;
