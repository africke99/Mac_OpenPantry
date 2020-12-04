
import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NumListRecover from '../components/NumListRecover';
import data from './inventory.json';
import { db } from '../components/Firebase/firebase2.js';



//import fs = require("fs");

//import { readFileSync } from "fs";
//import { writeFile } from "fs";

//https://sebhastian.com/react-firestore/ TESTING WITH THIS TUTORIAL
const inventory= data.map((x) => {return (x.name)} );
console.log(inventory);



// db.collection("Pasta").doc("Spaghetti").set({
//     name: "Barillo"
// })
// .then(function() {
//     console.log("Document successfully written?!");
// })
// .catch(function(error) {
//     console.error("Error writing: ", error);
// });


//declare function require(path: string):any;
//function changeInventory(food: string, weight: number){
//    var subVal = "";
//    for (var spec in inventory.canned){
//        if(spec==food){
//            let spec = Object.create({'name':})
//        }
//    }
//}

//var invenContent = readFileSync('inventory.json');
//var words = JSON.parse(invenContent);

function changeInventory(food: string){

    //words[food] = 1;
    //var data = JSON.stringify(words);
    //fs.writeFile('inventory.json',data);
}

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
      
      <IonContent fullscreen>
          
        <IonToolbar>
          <IonTitle>Pantry Inventory</IonTitle>
        </IonToolbar>

        <IonList>
        <IonItem text-center>
        <IonLabel>
          <div className = "padding"> 
            <IonButton href="https://forms.gle/qGqbk51g29aHukW27" target="_blank">Looking For An Item?</IonButton>
            <IonButton href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Check Out</IonButton>
          </div>
        </IonLabel>
        </IonItem>
      </IonList>
      
      <IonButton slot= "end" color= "danger" ></IonButton>
        <p className="ion-padding-start ion-padding-end"> </p>
        <NumListRecover itemName={data.map((x) => {return (x.name)} )} ></NumListRecover>
        <p className="ion-padding-start ion-padding-end"></p>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

