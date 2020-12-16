import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {useHistory } from "react-router";
import './HomePage.css';


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

const HomePage: React.FC = () => {
    
  const history = useHistory();

  return(
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Macalester Open Pantry</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonCard>
           <IonCardHeader>
              <IonCardSubtitle>Welcome to the Open Pantry</IonCardSubtitle>
              <IonCardTitle>Testing out text placement </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
            <p>Testing Hello World </p>
              <IonButton onClick={() => {
                  history.push('/tab1')
            }}>View Pantry Inventory</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
  export default HomePage;
