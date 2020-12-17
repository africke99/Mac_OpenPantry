import React, { Component, FC, useState } from 'react';
import "./InventoryDisplay.css";
import {
        IonList, IonItem, IonButton, IonAlert, IonListHeader, IonLabel, IonHeader, IonContent
        } from '@ionic/react';

    type Item = {
        itemName: Array<string>;
        subItems?: {[category: string]: string[] | undefined;};
        updateBag?: Function;
        setMyModal?: Function; 
    } 

    /**
     * InventoryDisplay is passed the category objects, as well as the item objects created in InventoryPage (using data imported from firestore).
     * The constant then displays the categories as ion-headers, and the pantry items as ion-labels within ion-items. 
     * On the right hand side of the web page, InventoryDisplay then adds "Add Item" buttons which add the item to "My Bag."
     * 
     * @param item is all the variables declared as "type Item"
     * 
     */

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
                            text: 'My Bag',
                            handler: () => {
                                setMyModal({isOpen:true})
                            }}]}/>
                </IonContent>                
            </IonList>
        );          
    };  
    export default InventoryDisplay;