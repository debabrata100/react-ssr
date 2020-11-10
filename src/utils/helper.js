import 'isomorphic-fetch';
const loadData = (resourceType) => {
    return fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(data => {
                return data;
            });
}
export { loadData };