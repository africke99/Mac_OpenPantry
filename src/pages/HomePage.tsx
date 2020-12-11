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

const HomePage = ({history}) => (

    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Home Page</IonCardSubtitle>
            <IonCardTitle>Let's take a look at the blog</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Sounds like a great idea. Click the button below!</p>
  
            <IonButton onClick={(e) => {
                  history.push('/tab1')
            }}>To Pantry Inventory</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
  export default HomePage;