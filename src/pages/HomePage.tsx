import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButtons,
  IonHeader,
  IonIcon,
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
  IonPage,
  IonLabel,
  IonItem,
  IonList
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { close} from 'ionicons/icons';
import {useHistory } from "react-router";
import './HomePage.css';
import logo from './UPantryLogo-02.png';


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
  const [adminModal, setAdminnModal] = useState({ isOpen: false });    
  const history = useHistory();

  return(
    <IonApp>
      <IonPage>
        <IonHeader>
        </IonHeader>

        <IonContent fullscreen>
          <div className="container">
            <img src={logo} alt="logo" />
          </div>
          <IonCard className= "card-padding">
           <IonCardHeader>
            </IonCardHeader>
            <IonCardContent>
              <IonButton  expand="block" className= "btn-padding" size="large" onClick={() => {
                  history.push('/tab1')
            }}>View Pantry Inventory</IonButton>
             <IonItem>
               <IonLabel> 
                 Admin? Log in <IonRouterLink color= "secondary" href="https://idp.quicklaunchsso.com/macalester" target="_blank">here!</IonRouterLink>
               </IonLabel>
             </IonItem>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
  export default HomePage;

  const adminModal:React.FC<any> = ({isOpen, onClose}) => {

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
