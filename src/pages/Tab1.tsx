import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NumberList from '../components/NumberList';

function  generateNumList(number: number) { 
}

  // function generateList(number: number) {
    
  //   numList.map(i => {return (<IonItem> <IonLabel>Item ${i} </IonLabel> </IonItem>)});
  // }
  

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
        <NumberList number={12}></NumberList>
        <p className="ion-padding-start ion-padding-end"></p>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

