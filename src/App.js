import { RouterProvider } from "react-router-dom";
import { Provider as MyRedux } from "react-redux";
import router from "./router";
import store from "./store";

function App() {
  return (
    <MyRedux store={store}>
      <RouterProvider router={router} />;
    </MyRedux>
  );
}

export default App;
