
const SearchMovies = async (title) => {
    const API_URL = `https://api.tvmaze.com/search/shows?q=${title}`
    const result = await fetch(API_URL);
    if (!result) {
        throw new Error("Movie list request failed!");
    }
    const data = await result.json();

    return data;
}

export default SearchMovies