import React, { Component } from 'react';
import {Provider} from "react-redux";
import { BrowserRouter} from "react-router-dom";
import getAppConfigurations from "./common/getAppConfigurations";


class App extends Component {
  render() {
      const {routes , store} = getAppConfigurations();
      return (
        <Provider store={store}>
            <BrowserRouter children={routes()} />
        </Provider>
    );
  }
}

export default App;
