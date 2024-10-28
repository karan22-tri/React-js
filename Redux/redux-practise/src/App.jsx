import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/store.JSX'
import ReduxCounter from './Component/ReduxCounter'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ReduxCounter/>
      </Provider>
    </div>
  )
}
