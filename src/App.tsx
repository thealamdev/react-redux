import './App.css'
import { Provider } from 'react-redux'
// import store from './redux/store'
import Header from './components/Header'
import store from './app/store'
// import Filter from './components/Filter'
// import ListItem from './components/ListItem'
// import Footer from './components/Footer'

function App() {

  return (
    <Provider store={store}>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <Header />
        {/* <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Filter />
          <ListItem />
          <Footer />
        </div> */}
      </div>
    </Provider>
  )
}

export default App
