import axios from 'axios';

async function getData(number) {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
    console.log(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts`, { params: { userId: number } });
    let user = {...users.data};
    // user = users.data;
    user.posts = posts.data;
    
    return user;
}

export default getData;