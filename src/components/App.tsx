import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar, 
  IonContent,
  IonButton,
  IonModal,
  IonText,
  IonRouterLink,
  IonPage
} from '@ionic/react';
import { IonReactRouter, IonReactHashRouter } from '@ionic/react-router';
import { close, help, fileTrayFullOutline,} from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
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

const App: React.FC = () => {

  const [questionModal, setQuestionModal] = useState({ isOpen: false });

  return(
  <IonApp>

    {/* <IonReactRouter>
      <IonPage id="main">
        <IonRouterOutlet>
          <Route path="/tab1" component={Tab1} exact={true}/> */}
          {/* <Route path= "/HomePage" component={HomePage} exact={true}/> */}
          {/* <Route path= "/HomePage/tab1" component={Tab1} exact={true}/> */}
          {/* <Route
            path="/"
            render= {() => <Redirect to="/HomePage" />}
            exact={true}
            />
        </IonRouterOutlet>
      </IonPage>
      </IonReactRouter> */}

    <IonHeader>
      <IonToolbar color= "secondary">
        <IonTitle color="primary">Macalester Pantry</IonTitle>
        <IonButtons slot="end">
          <IonButton color="primary"  onClick={() =>  setQuestionModal({isOpen:true})} >
            <IonIcon slot="icon-only" icon ={help}>
            </IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
   

{/* // Create a popup message with the help  icon so we only have checkout on the bottom. */}
    <IonContent>
      <QuestionModal isOpen={questionModal.isOpen} 
      onClose={() => setQuestionModal({isOpen:false})}/>
      <IonButtons slot= "primary">
        <IonButton>
          <IonIcon slot= "icon-only" name = "close">
          </IonIcon>
        </IonButton>
      </IonButtons>
     
        <IonReactHashRouter>
        {/* <IonTabs> */}
          <IonRouterOutlet >
            <Route path="/tab1" component={Tab1} exact={true} />
            <Route path="/homepage" component= {HomePage} exact={true}/>
            <Route path="/" render={() => <Redirect to="/homepage" />} exact={true} />
          </IonRouterOutlet>
      </IonReactHashRouter>
      </IonContent>
  </IonApp>
   );
  };
export default App;

const QuestionModal:React.FC<any> = ({isOpen, onClose}) => {

  return <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Welcome to the Open Pantry
            </IonTitle>
            <IonButton color= "secondary" slot ="end" onClick={onClose} >
              <IonIcon slot= "icon-only" icon ={close}>
              </IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className ="ion-padding">
          <IonText>
            <h3>
              Welcome to the Mac Open Pantry! This is a textbox for more
              info about the Open Pantry and things like that. Can't find an item? Request 
              an item or make suggestions <IonRouterLink color= "secondary" href="https://forms.gle/yjcNm1owrxcMzsxx7" target="_blank">here!</IonRouterLink>
            </h3>
          </IonText>
        </IonContent>
      </IonModal>
}
