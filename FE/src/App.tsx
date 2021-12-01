import { Provider } from "react-redux";
import storage from "./storage";
import { Toaster } from "react-hot-toast";
import RootRoute from "./routes/RootRoute";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Provider store={storage}>
        <Toaster position="top-right" reverseOrder={false} />
        <RootRoute />
      </Provider>
    </div>
  );
}

export default App;
