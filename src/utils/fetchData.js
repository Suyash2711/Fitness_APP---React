export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8a806b85eemsh5c97aedd60acbe9p141927jsn28efc2396720',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ac770ff1b6msh1a5e86b5fe54b7bp198b99jsna1bff419c3bb',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options)=> 
{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}