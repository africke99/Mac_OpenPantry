
import React, { useState } from 'react';
import { IonContent, IonModal, IonFooter, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton, IonApp } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NumberList from '../components/NumListRecover';
import data from './inventory.json';
import { db } from '../components/Firebase/firebase2.js';
import {close, help, basketOutline, basketSharp, ellipse, fastFoodOutline, fileTrayFullOutline, square, triangle } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';
import { stringify } from 'querystring';
import { promises } from 'dns';

const collectionNames: Array<string> = ["Beans and Protein",
"Beverages", "Bread and Tortillas", "Canned Fruits and Vegetables",
"Flour, Oil, Spices", "Oatmeal and Cereal", "Personal Care",
"Produce", "Rice and Pasta", "Sauces", "Snacks","Soups and Broth"];

//https://firebase.google.com/docs/firestore/query-data/get-data
//used firebase documentation as a guide for below function
async function returnAllDocs(collection:string): Promise<string[]>
{
  //let test: Array<string>=["",""]; 
  var returnArray:string[] = new Array(15);
  let i: number = 0;
  return db.collection(collection).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        returnArray[i]= doc.id;
        i++;
    });
    return returnArray;
  });
 
}

//https://sebhastian.com/react-firestore/ TESTING WITH THIS TUTORIAL
const inventory= data.map((x) => {return (x.collection)} );
console.log(inventory);


function changeInventory(food: string){

    //words[food] = 1;
    //var data = JSON.stringify(words);
    //fs.writeFile('inventory.json',data);
}

// //takes in the doc, finds it's collection, 
// //adds the data to the 'bag' json
// //returns true when it is successful
// function addItemtoInvent(doc:string) {
//     var fs = require("fs");
//     var getID = db.collection(doc);
//     var getCol = getID.get();
//     var itemToAdd = {};
//     itemToAdd = {getCol, doc, "1"}

//     fs.writeFile('inventory.json', JSON.stringify(itemToAdd), (err) => {
//       if (err) {
//         return false;
//       }}
      
//   // if (! err) ===> return true;
// }

//cookie
//local storage API

// export function setBagCookie(collection, item)  {
//   //const date = new Date();
//   //date.setTime(date.getTime() + 60*1000));
//   //var col = collection;

//   //FIGURE OUT EXPIRATION ^^^

//   //document.write("Setting Cookies : ")   ???? needed?
//   if (document.cookie.includes(item) {
//       document.cookie = //FIGURE OUT HOW TO UPDATE THE QUANTITY WITHOUT ADDING A NEW ITEM
//   }
//   else(
//     document.cookie = ("Category: " + collection + " , Item: " + item + " , Quantity: " + 1)
//   )
//   }

// //TOOK THIS FROM https://gist.github.com/joduplessis/7b3b4340353760e945f972a69e855d11
// //not sure if it would work at all
// export function getCookie(item: string){
//   const value = "; " + document.cookie;
//   const parts = value.split("; " + item + "=");
    
//   if (parts.length == 2) {
//       return parts.pop().split(";").shift();
//   }
// }

// export function deleteCookie(item: string){
//   //figure this out after you figure out how to set a cookie to expire
// }


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
      //console.log(c);
      useDocsList.then((docs: string[])=>{
        let itemList: string[];
        itemList = docs;
        docMap[c] = itemList;
        setDocMap(docMap);
      });
    })
    
  });
  // const[add]
  const [myBag, setmyBag] = useState({});

  const updateBag = (collection:string, name:string) => {
    //check to see if item is already in
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
           <IonTitle>Pantry Inventory</IonTitle>     

          </IonToolbar>
      
      <IonButton slot= "end" color= "danger" ></IonButton>
        <p className="ion-padding-start ion-padding-end"> </p>
          <NumberList itemName={catList} subItems={docMap} updateBag = {updateBag} ></NumberList>
          <p className="ion-padding-start ion-padding-end"></p>

        {/* <p className="ion-padding-start ion-padding-end"> </p>
        <NumberList itemName={inventory} ></NumberList>
        <p className="ion-padding-start ion-padding-end"></p> */}
      
      {/* <IonButton slot= "end" color= "danger" ></IonButton>  */}
        {/* <p className="ion-padding-start ion-padding-end"> </p>
        <NumberList itemName={inventory} ></NumberList>
        <p className="ion-padding-start ion-padding-end"></p> */}
      </IonContent>
      <MyModal isOpen={myModal.isOpen} 
      onClose={() => setMyModal({isOpen:false})}/>
      <IonFooter>
        <IonToolbar>
          <IonButton id="myBag" slot="end" onClick={() =>  setMyModal({isOpen:true})}>Checkout
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  </IonApp>
  );
};

export default Tab1;

// REFACTORING Modal
const MyModal:React.FC<any> = ({isOpen, onClose}) => {

  return <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              My Bag
            </IonTitle>
            <IonButton slot ="end" onClick={onClose} >
              <IonIcon slot= "icon-only" icon ={close}>
              </IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className ="ion-padding">
        <IonItem>
          <IonLabel>
              Item 
            </IonLabel>
        </IonItem>
        </IonContent>

        <IonButton onClick={onClose} href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Confirm
        </IonButton>
      </IonModal>
}

