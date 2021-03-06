import { Suspense } from 'react'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'

import routes from '@/router'
import store from './store/index'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppPlayerBar from '@/pages/player/app-player-bar'
import {HashRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
        <Suspense fallback={<div>加载中...</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter/>
        <AppPlayerBar/>
      </HashRouter>
    </Provider>
  );
}

export default App;
