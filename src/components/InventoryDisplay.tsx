import React, { Component, FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { db } from '../components/Firebase/firebase2.js';
import { stringify } from 'querystring';
import {


        IonList, IonItem, IonButton, IonAlert, IonListHeader, IonLabel, IonHeader, IonContent

    } from '@ionic/react';

import { nodeModuleNameResolver } from 'typescript';
import "./InventoryDisplay.css";
import firebase from "firebase";

    type Item = {
        itemName: Array<string>;
        subItems?: {[category: string]: string[] | undefined;};
        updateBag?: Function;
        setMyModal?: Function; 
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




    const InventoryDisplay: React.FC<Item> = (item) => {
        const [showAlert1, setShowAlert1] = useState(false);
        const [clickedItemName, setclickedItemName ] = useState("");
        const { itemName,subItems,updateBag, setMyModal} = item;
      
        return(    
            <IonList>
                {itemName && itemName.map((i) => {
                return (
                <IonList lines="inset" inset= {true}>
                    <IonListHeader >
                    
                        <IonLabel>
                        <strong> {i} </strong> 
                        </IonLabel>                         
                    </IonListHeader> 
                    {subItems[i] && subItems[i].map( element => {
                        return (
                        <IonItem>
                            <IonLabel>
                                <small> {element} </small>
                            </IonLabel>
                            <IonButton slot= "end" color= "danger" onClick={() => {updateBag(i, element); setShowAlert1(true); setclickedItemName(element);}} expand="block">Add Item </IonButton> 
                            
                        </IonItem>)
                    })}
                </IonList>
                )})}
                <IonContent>

                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    header={ `${clickedItemName} was added to cart` }
                    message={'Would you like to keep shopping?'}
                    buttons= {[
                         {
                             text: 'Keep Shopping',
                             handler: () => {}
                        },
                        {
                            text: 'Cart',
                            handler: () => {
                                setMyModal({isOpen:true})
                            }
                        }
                        ]}
                    />

                </IonContent>
                
            </IonList>
        );
            
    };  

    export default InventoryDisplay;
