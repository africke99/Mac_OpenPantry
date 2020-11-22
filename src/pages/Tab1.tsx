
import React, { useState } from 'react';
import { IonContent, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NumberList from '../components/NumberList';
import fs = require("fs");
import { readFileSync } from "fs";
import { writeFile } from "fs";

//import * as inventory from './inventory.json';

//declare function require(path: string):any;
//function changeInventory(food: string, weight: number){
//    var subVal = "";
//    for (var spec in inventory.canned){
//        if(spec==food){
//            let spec = Object.create({'name':})
//        }
//    }
//}

var invenContent = readFileSync('inventory.json');
var words = JSON.parse(invenContent);

function changeInventory(food: string){

    words[food] = 1;
    var data = JSON.stringify(words);
    fs.writeFile('inventory.json',data);
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
  
  let food: string[] = ['apple', 'orange', 'banana'];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pantry Inventory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <button onClick={this.changeInventory("test")}>test button</button>
        <p className="ion-padding-start ion-padding-end"> </p>
        <NumberList itemName={food} ></NumberList>
        <p className="ion-padding-start ion-padding-end"></p>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;

