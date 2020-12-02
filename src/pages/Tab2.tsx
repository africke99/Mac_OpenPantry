import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonButton, IonAlert} from '@ionic/react';
// import { alertController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
import './Tab2.css';
import ExploreContainer from '../components/ExploreContainer';
import { db } from '../components/Firebase/firebase2.js';
import { stringify } from 'querystring';
// export const AlertExample: React.FC = () => {
//   const [showAlert1, setShowAlert1] = useState(false);





//doing something good\/\/\/\/\/

function yetAgain(): Array<string> {
  //let test: Array<string>=["",""]; 
  var test:string[] = new Array(11);
  let i: number = 0;
  db.collection("Produce").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        test[i]=doc.id;
        i++;
    });});
    return test;

}


let testing = yetAgain();


export const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantry Items</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>
            Canned Goods
          </IonListHeader>
        </IonList>
        <IonList>
          <IonItem>
            <IonButton slot= "end" color= "danger"> Add Item </IonButton> 
            <IonLabel>{testing[0]}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{testing[1]}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{testing[2]}</IonLabel>
          </IonItem>
          <IonItem>
           <IonLabel>{testing[3]}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>{testing[4]}</IonLabel>
          </IonItem>
        </IonList> 
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
}
export default Tab2;

