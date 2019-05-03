import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000'    
})

const handleError = fn => (...params) => fn(...params).catch(error => {
        console.log(error)
})


export const api = {

    getWords: handleError(async () => {
        const res = await instance.get('/words')
        return res.data
    }),

    getWord: handleError(async id => {
        const res = await instance.get(`/words/${id}`)
        return res.data
    }),

    createWord: handleError(async payload => {
        const res = await instance.post('/words', payload);
        return res.data;
      }),

    updateWord: handleError(async payload => {
        const res = await instance.put(`/words/${payload._id}`, payload);
        return res.data;
    })
}