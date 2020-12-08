import API from '../api';

export async function getWeatherData(city: string) {
    return await API.get('', {
            params:
                {
                    q: city,
                }
        }
    )
}
