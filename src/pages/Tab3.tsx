import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

// export interface Product {
//   name: string; 
//   weightOz: number; 
//   amount: number; 

// }

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> My Bag</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      
      <IonList>
        <IonItem text-center>
        <IonLabel>
          <div className = "padding"> 
            <IonButton href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Check Out</IonButton>
            <IonButton href="https://forms.gle/qGqbk51g29aHukW27" target="_blank">Looking For An Item?</IonButton>
          </div>
        </IonLabel>
        </IonItem>
      </IonList>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Bag</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
