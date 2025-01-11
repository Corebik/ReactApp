export const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY_ONE, 
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}
 
export { fetchData };
