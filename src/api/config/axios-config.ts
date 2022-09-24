const searchByBeerName = (beer_name:string) => `https://api.punkapi.com/v2/beers?beer_name=${beer_name}`;

export { searchByBeerName}