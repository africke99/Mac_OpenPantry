import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { db } from '../components/Firebase/firebase2.js';
import 'firebase/firestore';
import firebase from "firebase";



const MyModal:React.FC<any> = ({isOpen, onClose, myBag}) => {
    let items = Object.values(myBag);
    
    return <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                My Bag
              </IonTitle>
              <IonButton color="danger" slot ="end" onClick={onClose} >
                <IonIcon slot= "icon-only" icon="close">
                </IonIcon>
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent className ="ion-padding">
          {items.map((item) => {
            return Object.entries(item).map((entry) => {
              return(<IonItem>
                <IonLabel>
                      {entry[0] + " : " + entry[1]} 
                    </IonLabel> 
                    </IonItem> )})
            })
            }
          
          </IonContent>
  
          <IonButton color = "danger" onClick={onClose} href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Confirm
          </IonButton>
        </IonModal>
  };
  export default MyModal;