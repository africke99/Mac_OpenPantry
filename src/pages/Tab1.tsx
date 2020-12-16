
import React, { useState } from 'react';
import { IonContent, IonModal, IonFooter, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton, IonApp, IonBackButton, IonButtons, IonText, IonRouterLink } from '@ionic/react';
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
    //check to see if item is already in
    //var category = collection;
    //var item = name;
    if (!(collection in myBag)) {
      myBag[collection] = {}
    }
    if (!(name in myBag[collection])){
      myBag[collection][name] = 0;
    }
    myBag[collection][name]++;
    setmyBag(myBag);
    //return item;
  }

  const [questionModal, setQuestionModal] = useState({ isOpen: false });


  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
         <IonToolbar>
           <IonButton slot="start">
             <IonBackButton />
           </IonButton>
           <IonTitle color="secondary">Pantry Inventory</IonTitle>
       
          </IonToolbar>
          <QuestionModal isOpen={questionModal.isOpen} 
      onClose={() => setQuestionModal({isOpen:false})}/>
      <IonButtons slot= "primary">
        <IonButton>
          <IonIcon slot= "icon-only" name = "close">
          </IonIcon>
        </IonButton>
      </IonButtons><QuestionModal isOpen={questionModal.isOpen} 
      onClose={() => setQuestionModal({isOpen:false})}/>
      <IonButtons slot= "primary">
        <IonButton>
          <IonIcon slot= "icon-only" name = "close">
          </IonIcon>
        </IonButton>
      </IonButtons>
      
      <IonButton slot= "end" color= "danger" ></IonButton>
        <p className="ion-padding-start ion-padding-end"> </p>
          <InventoryDisplay itemName={catList} subItems={docMap} updateBag = {updateBag}></InventoryDisplay>
          <p className="ion-padding-start ion-padding-end"></p>

      </IonContent>
      <MyModal 
      myBag={myBag}
      isOpen={myModal.isOpen} 
      onClose={() => {setMyModal({isOpen:false});updateFirestore(myBag);}}/>
      <IonFooter>
        <IonToolbar>
          <IonButton className= "btnpadding" size= "large" color= "danger" id="myBag" slot="end" onClick={() =>  setMyModal({isOpen:true})}>My Bag
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  </IonApp>
  );
};

export default Tab1;

// REFACTORING Modal
const MyModal:React.FC<any> = ({isOpen, onClose, myBag}) => {
  let items = Object.values(myBag);
  
  return <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              My Bag
            </IonTitle>
            <IonButton color="danger" slot ="end" onClick={onClose} >
              <IonIcon slot= "icon-only" icon ={close}>
              </IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className ="ion-padding">
        {items.map((item) => {
          return Object.entries(item).map((entry) => {
            return(<IonItem>
              <IonLabel>
                    {entry[0]} 
                  </IonLabel> 
                  </IonItem> )})
          })
          }
        
        </IonContent>

        <IonButton color = "danger" onClick={onClose} href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Check Out
        </IonButton>
      </IonModal>
}

const QuestionModal:React.FC<any> = ({isOpen, onClose}) => {

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
