import React from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantry Inventory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem button onClick={() => { }}>
          <IonLabel>
            Item
          </IonLabel>
          <IonNote slot="end" color="primary">99</IonNote>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

