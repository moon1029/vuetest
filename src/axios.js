import axios from 'axios'

var instance = axios.create({
  //这个暂时用不到
  // baseURL: 'http://218.201.45.132:80/api',
})
export default instance 