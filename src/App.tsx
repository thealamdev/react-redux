import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import Counter from './components/Counter'
import DynamicCounter from './components/DynamicCounter'

function App() {

  return (
    <Provider store={store}>
      <Counter />
      <DynamicCounter />
    </Provider>
  )
}

export default App
