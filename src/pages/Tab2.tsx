import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonButton, IonAlert} from '@ionic/react';
// import { alertController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
import './Tab2.css';
import ExploreContainer from '../components/ExploreContainer';
import { db } from '../components/Firebase/firebase2.js';
import { stringify } from 'querystring';
import NumberList from '../components/NumberList';
// export const AlertExample: React.FC = () => {
//   const [showAlert1, setShowAlert1] = useState(false);



const collectionNames: Array<string> = ["Beans and Protein",
"Beverages", "Bread and Tortillas", "Canned Fruits and Vegetables",
"Flour, Oil, Spices", "Oatmeal and Cereal", "Personal Care",
"Produce", "Rice and Pasta", "Sauces", "Snacks","Soups and Broth"];

//https://firebase.google.com/docs/firestore/query-data/get-data
//used firebase documentation as a guide for below function
function returnAllDocs(col:string): Array<string> {
  //let test: Array<string>=["",""]; 
  var returnArray:string[] = new Array(11);
  let i: number = 0;
  db.collection(col).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        returnArray[i]= doc.id;
        i++;
        
    });
    console.log(returnArray);
  });
  console.log(returnArray);   
  return returnArray;
  
}

// function getFieldData(): Array<number> {
//   var weight:number[] = new Array(11);
//   let i = 0;
//   db.collection("Produce").doc("weight").get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       weight[i]=doc.id;
//       i++;
//     }
//   });});
//   return weight
// }



let arrayOfDocs = returnAllDocs("Category Names");

//let docArray = returnAllDocs(arrayOfDocs[0]);
//console.log(arrayOfDocs[0]);



export const Tab2: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pantry Inventory</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        {/* <IonButton slot= "end" color= "danger" ></IonButton>  */}
          <p className="ion-padding-start ion-padding-end"> </p>
          <NumberList itemName={arrayOfDocs} ></NumberList>
          <p className="ion-padding-start ion-padding-end"></p>
        
        </IonContent>
      </IonPage>
    );
  };
export default Tab2;

