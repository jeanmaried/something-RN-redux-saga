import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`
});

instance.interceptors.request.use(function (config): AxiosRequestConfig {
        config.params['APPID'] = '945972664d717b803dfbdbe4b8ac3781'
        return config
    }, function (error) {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(function (res): AxiosResponse {
        return res.data.main
    }, function (error) {
        return Promise.reject(error)
    }
)

export default instance
