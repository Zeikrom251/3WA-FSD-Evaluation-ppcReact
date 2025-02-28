import { Provider } from "react-redux"
import AppRouter from "./routes/AppRouter"
import store from "./store"
import "./App.css"

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>💬 InstaWish</h1>
        <div className="App-router-container">
          <AppRouter />
        </div>
      </div>
    </Provider>
  )
}

export default App
