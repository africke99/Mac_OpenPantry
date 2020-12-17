import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState } from "react";
import { db } from '../components/Firebase/firebase2.js';
import 'firebase/firestore';
import firebase from "firebase";


/**
     * MyModal is passed an isOpen function, and onClose function, and an Object that acts as myBag.
     * The component makes a modal that displays the contents within the "bag". It displays each item
     * and the quantity added in seperate Ion Labels within Ion Items. The modal has a "confirm" button to 
     * confirm the submission of the contents of the bag that updates the firestore database and sends the user
     * to a google form exit survey.
     * This component also creates a "checkout" button that shows the modal when pressed.
     * 
     * @param isOpen  is a boolean that opens the modal
     * @param onClose is a boolean that closes the modal
     * @param myBag   is an Object type that has Categories as keys and an Object with ItemName and Quantity 
     *                key-value pairings as the values.
     * 
     */
const MyModal:React.FC<any> = ({isOpen, onClose, myBag}) => {
    let items = Object.values(myBag);
    
    return (
        <IonModal isOpen={isOpen}>
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
              return(
                <IonItem>
                  <IonLabel>
                      {entry[0] + " : " + entry[1]} 
                  </IonLabel> 
                </IonItem> )})
            })}
          </IonContent>
          <IonButton color = "danger" onClick={onClose} href= "https://forms.gle/yjcNm1owrxcMzsxx7" target= "_blank"> Confirm
          </IonButton>
        </IonModal>
    )};
  export default MyModal;