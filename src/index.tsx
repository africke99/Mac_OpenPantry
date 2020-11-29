import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import FirebaseContext from './components/Firebase';
import Firebase from './components/Firebase';


ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />,
    </FirebaseContext.Provider>,
    document.getElementById('root'),);

serviceWorker.unregister();