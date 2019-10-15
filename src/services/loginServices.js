import axios from 'axios';
import configBase from '../../public/config';
import clientKindUrl from '../url/kindInfo';


const loginServices = {
    // 获取头部标题的信息
   async getSystemTitle() {
        const url = configBase.baseUrl + clientKindUrl.getTitleInfo;
        return await axios.get();
    }
}

export default loginServices;