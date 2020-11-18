import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

function  generateNumList(number: number) { 
  let itemString = ' ';
  for (let i = 0; i < number; i ++){
    itemString += '<IonItem> <IonLabel>Item ${i} </IonLabel> </IonItem>';
      }
  return itemString;
  }

  function generateList(number = 5) {
    return <IonList>${generateNumList(number)}</IonList>;
    // return `
    //   <ion-list>
    //     ${generateNumList(number)}
    //   </ion-list>
    // `;
}

function getContent() {
  return document.querySelector('ion-content');
}

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantry Inventory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
        <p className="ion-padding-start ion-padding-end"> </p>
        ${generateList(15)}
        <p className="ion-padding-start ion-padding-end"></p>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

