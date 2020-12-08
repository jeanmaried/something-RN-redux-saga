import React, { FC } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { connect } from 'react-redux'
import City from '../components/City'
import { onCityChange, addCity, removeCity } from '../redux/weather.actions'
import { IRootState } from '../rootReducer'

const CityContainer: FC<Props> = ({
  city,
  cities,
  weather,
  isLoading,
  onCityChange,
  addCity,
  removeCity
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onCityChange}
        style={styles.input}
        value={city}
      />
      <Button title={'Add'} onPress={() => addCity(city)} />
      {!isLoading &&
        cities?.map((value) => (
          <City
            key={value}
            name={value}
            weather={weather[value]}
            onRemove={removeCity}
          />
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '500px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  input: {
    borderWidth: 1,
    borderColor: 'red'
  }
})

const mapStateToProps = ({ weather }: IRootState) => ({
  city: weather.city,
  cities: weather.cities,
  weather: weather.weather,
  isLoading: weather.isLoading
})

const mapDispatchToProps = {
  onCityChange,
  addCity,
  removeCity
}

export default connect(mapStateToProps, mapDispatchToProps)(CityContainer)

type ReduxStateType = ReturnType<typeof mapStateToProps>
type Props = ReduxStateType & typeof mapDispatchToProps
