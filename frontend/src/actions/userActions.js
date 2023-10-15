import axios from 'axios'
import { userReducer } from '../reducers/userReducers'
import Cookies from 'js-cookie'

export const login = (username, password) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            }
        };
        const body = JSON.stringify({ username, password });

        const loginData = async () => {
            const res = await axios.post('http://127.0.0.1:8000/api/users/login/', body, config);
            return res;
        };
        try {
            dispatch(userReducer.user_login_request());
            const res = await loginData();
            dispatch(userReducer.user_login_Success(res.data));
            localStorage.setItem('userInfo', JSON.stringify(res.data))
        } catch (error) {
            dispatch(userReducer.user_login_Fail(error.response));
        };
    };
};