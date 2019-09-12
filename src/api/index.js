import {mainParams} from "../common/constants";
import axios from "axios";

export default class Api {

    static login(data){
        const bodyFormData = new FormData();
        bodyFormData.set('username', data.username);
        bodyFormData.set('password', data.password);
        return axios({
            method: 'post',
            url: `${mainParams.apiUrl}/api/auth/login`,
            data: bodyFormData
        })
    }
}
