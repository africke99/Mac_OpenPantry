import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import {
        IonApp, IonRouterOutlet, IonContent,
      } from '@ionic/react';
import { IonReactRouter, IonReactHashRouter } from '@ionic/react-router';
import { close, help, fileTrayFullOutline,} from 'ionicons/icons';
import InventoryPage from '../pages/InventoryPage';
import HomePage from '../pages/HomePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

/**
 * Initializes app pages
*/

const App: React.FC = () => {

  const [questionModal, setQuestionModal] = useState({ isOpen: false });

  return(
  <IonApp>
    <IonContent>     
        <IonReactHashRouter>
          <IonRouterOutlet >
            <Route path="/tab1" component={InventoryPage} exact={true} />
            <Route path="/homepage" component= {HomePage} exact={true}/>
            <Route path="/" render={() => <Redirect to="/homepage" />} exact={true} />
          </IonRouterOutlet>
        </IonReactHashRouter>
      </IonContent>
  </IonApp>
   );
  };
export default App;