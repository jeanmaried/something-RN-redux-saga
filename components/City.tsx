import React, {ReactElement, FC, memo} from 'react';
import {View, Text, Button} from 'react-native';
import {useCountRenders} from '../hooks/useCountRenders'

type Weather = {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
}

type Props = {
    name: string,
    weather: Weather,
    onRemove: (name: string) => void
}

const City: FC<Props> = ({name, onRemove, weather}): ReactElement => {
    useCountRenders()

    return (
        <View>
            <Text>{name}</Text>
            <Text>Feels like: {weather.feels_like}</Text>
            <Text>Temperature: {weather.temp}</Text>
            <Button title={'remove'} onPress={() => onRemove(name)}/>
        </View>
    )
}

export default memo(City);
