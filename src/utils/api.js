const API = 'https://api.coincap.io/v2';

function getApi() {
    return fetch(`${API}/assets?limit=20`)
    .then(res => res.json())
    .then(res => res.data)
}

const getCoin = (coin) => {
    return fetch(`${API}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

const assetHistory = (coin) => {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();
    return fetch(`${API}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`)
    .then(res => res.json())
    .then(res => res.data)
}

const getMarkets = async coin => {
    return fetch(`${API}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
  };
  
const getExchange = async id => {
    return fetch(`${API}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
};


export default {getApi, getCoin, assetHistory, getMarkets, getExchange};