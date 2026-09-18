export const getMovies = async () => {
    const API_URL = `https://api.tvmaze.com/shows`
    const result = await fetch(API_URL);
    if(!result)
    {
        throw new Error("Movie list request failed!");
    }
    const data = await result.json();
    return data;
}