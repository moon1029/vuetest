import axios from 'axios';

const api = {
    getWarningCount(){
        return axios.get('/v1/equip/listImsiInfo')
    }
}
export default api