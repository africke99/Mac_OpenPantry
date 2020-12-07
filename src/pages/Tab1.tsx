
import React, { useState } from 'react';
import { IonContent, IonModal, IonFooter, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton, IonApp } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import NumberList from '../components/NumberList';
import data from './inventory.json';
import { db } from '../components/Firebase/firebase2.js';
import {close, help, basketOutline, basketSharp, ellipse, fastFoodOutline, fileTrayFullOutline, square, triangle } from 'ionicons/icons';
import { Component } from 'ionicons/dist/types/stencil-public-runtime';



//import fs = require("fs");

//import { readFileSync } from "fs";
//import { writeFile } from "fs";

//https://sebhastian.com/react-firestore/ TESTING WITH THIS TUTORIAL
const inventory= data.map((x) => {return (x.name)} );
console.log(inventory);


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
  const [myModal, setMyModal] = useState({ isOpen: false });

  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
         <IonToolbar>
           <IonTitle>Pantry Inventory</IonTitle>
       
          </IonToolbar>
      
      <IonButton slot= "end" color= "danger" ></IonButton>
        <p className="ion-padding-start ion-padding-end"> </p>
        <NumberList itemName={inventory} ></NumberList>
        <p className="ion-padding-start ion-padding-end"></p>


        <IonList>
        <IonItem text-center>
        <IonLabel>
          <div className = "padding"> 
            <IonButton href="https://forms.gle/qGqbk51g29aHukW27" target="_blank">Looking For An Item?</IonButton>
          </div>
        </IonLabel>
        </IonItem>
      </IonList>

      <MyModal isOpen={myModal.isOpen} 
      onClose={() => setMyModal({isOpen:false})}/>
      
      <IonFooter>
        <IonToolbar>
          <IonButton id="myBag" slot="end" onClick={() =>  setMyModal({isOpen:true})}>Checkout
          </IonButton>
        </IonToolbar>
      </IonFooter>
      
      </IonContent>

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



