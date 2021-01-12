import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { Provider } from 'react-redux'
import store from './store'
import { UserContext } from './UserContext'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const [user, setUser] = useState(null)

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <UserContext.Provider value={{ user, setUser }}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </UserContext.Provider>
        </Provider>
      </SafeAreaProvider>
    )
  }
}
