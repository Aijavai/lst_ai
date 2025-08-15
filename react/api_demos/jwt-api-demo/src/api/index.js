import axios from './config'

// todos接口
export const getTodos = () => {
    return axios.get('http://localhost:5175/api/todos')
}

export const getRepos = () => {
    return axios.get('http://localhost:5175/api/repos')

}