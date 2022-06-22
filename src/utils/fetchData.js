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
      'X-RapidAPI-Key': '8a806b85eemsh5c97aedd60acbe9p141927jsn28efc2396720',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };



export const fetchData = async (url, options)=> 
{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}