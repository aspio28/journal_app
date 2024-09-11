import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-b8f8f-default-rtdb.firebaseio.com'
})

export default journalApi