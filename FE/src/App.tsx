import { Provider } from "react-redux";
import storage, { persistor } from "./storage";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import RootRoute from "./routes/RootRoute";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Provider store={storage}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster position="top-right" reverseOrder={false} />
          <RootRoute/>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
