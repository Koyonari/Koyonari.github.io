function fetchInflationDataForAllCountries() {
    return fetchAvailableCountries()  // Assuming a function to get a list of countries
      .then(countries => Promise.all(countries.map(country => fetchInflationData(country))))
      .then(data => {
        // Combine or process inflation data for all countries
        return data;
      });
  }

  function fetchInflationDataForAllCountries() {
    return fetchAvailableCountries()  // Assuming a function to get a list of countries
      .then(countries => Promise.all(countries.map(country => fetchInflationData(country))))
      .then(data => {
        // Combine or process inflation data for all countries
        return data;
      });
  }  