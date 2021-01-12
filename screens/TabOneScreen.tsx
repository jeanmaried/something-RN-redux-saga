import * as React from 'react'
import { Button, StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'
import TodoContainer from '../containers/WeatherContainer'
import { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function TabOneScreen() {
  const { user, setUser } = useContext(UserContext)

  return (
    <View style={styles.container}>
      {!!user && <Text>{JSON.stringify(user)}</Text>}
      <Button
        title={'Login'}
        onPress={() => {
          setUser({
            id: 4,
            username: 'bob',
            email: 'bob@bob.com'
          })
        }}
      />
      <TodoContainer />
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
