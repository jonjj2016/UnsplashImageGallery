import axios from 'axios'
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 0b324f67b9dec587c38b4dda215760d30f46f7b52f7b3a91a1c85d8881ac5847'
    }
})