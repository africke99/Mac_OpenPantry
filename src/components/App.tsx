import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { basketOutline, basketSharp, ellipse, fastFoodOutline, fileTrayFullOutline, square, triangle } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';

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

//firebase test below:
// import Firebase from 'firebase';
// import config from '../src/components/Firebase/firebase.js';


// class App extends React.Component {

//   constructor(props: {} | Readonly<{}>){
//     super(props);
//     Firebase.initializeApp(config.firebase);

//     this.state = {
//       developers: []
//     }
//   }

const App: React.FC = () => (
  <IonApp>
  
 
        <IonToolbar>
          <IonTitle>Macalester Pantry</IonTitle>
        </IonToolbar>
     
     
        <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet style={{top:'6vh'}}>
            <Route path="/tab1" component={Tab1} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/tab3" component={Tab3} />
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
              <IonIcon icon={fileTrayFullOutline} />
              <IonLabel>Inventory</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon icon={ellipse} />
              <IonLabel>Tab 2</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={basketOutline} />
              <IonLabel>Basket</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
       
  </IonApp>
);
export default App;


