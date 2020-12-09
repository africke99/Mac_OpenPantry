import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonListHeader, IonButton, IonAlert} from '@ionic/react';
// import { alertController } from 'https://cdn.jsdelivr.net/npm/@ionic/core/dist/ionic/index.esm.js';
import './Tab2.css';
import ExploreContainer from '../components/ExploreContainer';
import { db } from '../components/Firebase/firebase2.js';
import { stringify } from 'querystring';
import NumberList from '../components/NumListRecover';
import { promises } from 'dns';
// export const AlertExample: React.FC = () => {
//   const [showAlert1, setShowAlert1] = useState(false);



const collectionNames: Array<string> = ["Beans and Protein",
"Beverages", "Bread and Tortillas", "Canned Fruits and Vegetables",
"Flour, Oil, Spices", "Oatmeal and Cereal", "Personal Care",
"Produce", "Rice and Pasta", "Sauces", "Snacks","Soups and Broth"];


//https://firebase.google.com/docs/firestore/query-data/get-data
//used firebase documentation as a guide for below function
async function returnAllDocs(collection:string): Promise<string[]>
{
  //let test: Array<string>=["",""]; 
  var returnArray:string[] = new Array(11);
  let i: number = 0;
  return db.collection(collection).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        returnArray[i]= doc.id;
        i++;
    });
    return returnArray;
  });
 
}



export const Tab2: React.FC = () => {
  const [catList, setCatList] = useState<string[]>([]);
  const [docList, setDocList] = useState<string[]>([]);
  
  let arrayOfDocs = returnAllDocs("Category Names");
  let categoryLists: string[];

  arrayOfDocs.then((docs: string[])=>{
    categoryLists = docs;
    setCatList(categoryLists);

  
    let useDocsList = returnAllDocs(categoryLists[0]);
    let itemList: string[];
  
    useDocsList.then((docs: string[])=>{
      itemList = docs;
      setDocList(itemList);
    });
  });

  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pantry Inventory</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
         <IonButton slot= "end" color= "danger" ></IonButton> 
          <p className="ion-padding-start ion-padding-end"> </p>
          <NumberList itemName={catList} subItems={docList}  ></NumberList>
          <p className="ion-padding-start ion-padding-end"></p>
        </IonContent>
      </IonPage>
    );
  };
export default Tab2;