import * as React from 'react'
import { Button, StyleSheet } from 'react-native'

import WeatherContainer from '../containers/WeatherContainer'
import { Text, View } from '../components/Themed'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function TabTwoScreen() {
  const { user, setUser } = useContext(UserContext)

  return (
    <View style={styles.container}>
      {!!user && <Text>{JSON.stringify(user)}</Text>}
      <Button title={'Logout'} onPress={() => setUser(null)} />
      <WeatherContainer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
