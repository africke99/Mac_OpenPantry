
import React, { useState } from 'react';
import { IonContent, IonModal, IonFooter, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton, IonApp, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import InventoryDisplay from '../components/InventoryDisplay';
import { db } from '../components/Firebase/firebase2.js';
import {close, help, basketOutline, basketSharp, ellipse, fastFoodOutline, fileTrayFullOutline, square, triangle } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { stringify } from 'querystring';
import { promises } from 'dns';
import 'firebase/firestore';
import firebase from "firebase";
import MyModal from '../components/MyModal';


//https://firebase.google.com/docs/firestore/query-data/get-data
//used firebase documentation as a guide for below function
async function returnAllDocs(collection:string): Promise<string[]>
{
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

function updateFirestore(bag:{}){
  let listOfCategories = Object.keys(bag);
  let itemAndQuantities = Object.values(bag);
  let count:number = 0;
  while(count<listOfCategories.length){
    db.collection(listOfCategories[count]).doc(Object.keys(itemAndQuantities[count])[0]).update({
      "quantity" :firebase.firestore.FieldValue.increment((-1)*Object.values(itemAndQuantities[count])[0])
    })
    count++;
  }
}

const Tab1: React.FC = () => {
  const [myModal, setMyModal] = useState({ isOpen: false });
  const [catList, setCatList] = useState<string[]>([]);
  const [docMap, setDocMap] = useState<{[category: string]: string[];}>({});
  
  let arrayOfDocs = returnAllDocs("Category Names");
  let categoryLists: string[];

  arrayOfDocs.then((docs: string[])=>{
    categoryLists = docs;
    setCatList(categoryLists);

    categoryLists.forEach(c => {
      let useDocsList = returnAllDocs(c);
      
      useDocsList.then((docs: string[])=>{
        let itemList: string[];
        itemList = docs;
        docMap[c] = itemList;
        setDocMap(docMap);
      });
    })
    
  });
  const [myBag, setmyBag] = useState({});

  const updateBag = (collection:string, name:string) => {
    if (!(collection in myBag)) {
      myBag[collection] = {}
    }
    if (!(name in myBag[collection])){
      myBag[collection][name] = 0;
    }
    myBag[collection][name]++;
    setmyBag(myBag);
  }

  

  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
         <IonToolbar>
           {/* <IonButton color = "secondary" slot="start">
             <IonBackButton/>
           </IonButton> */}
           <IonTitle color="secondary">Pantry Inventory</IonTitle>
       
          </IonToolbar>
      
      <IonButton slot= "end" color= "danger" ></IonButton>
        <p className="ion-padding-start ion-padding-end"> </p>
          <InventoryDisplay itemName={catList} subItems={docMap} updateBag = {updateBag} setMyModal={setMyModal}></InventoryDisplay>
          <p className="ion-padding-start ion-padding-end"></p>

        
      </IonContent>
      <MyModal 
      myBag={myBag}
      isOpen={myModal.isOpen} 
      onClose={() => {setMyModal({isOpen:false});updateFirestore(myBag);}}/>
      <IonFooter>
        <IonToolbar>
          <IonButton color= "danger" id="myBag" slot="end" onClick={() =>  setMyModal({isOpen:true})}>Checkout
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  </IonApp>
  );
};

export default Tab1;
