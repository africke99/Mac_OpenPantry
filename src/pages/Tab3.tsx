import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAlert, IonButton, IonList } from '@ionic/react';
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
          <IonTitle> My Cart </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      {/* <IonList style= "text-align:center"> */}
        <section>
          <header>Block Width</header>
          <IonButton slot = "middle" size= "small">Check Out</IonButton>
        </section>
        {/* </IonList> */}

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
