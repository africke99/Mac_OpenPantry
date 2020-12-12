import React, { Component, FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { db } from '../components/Firebase/firebase2.js';
import { stringify } from 'querystring';
import {


        IonList, IonItem, IonButton, IonAlert, IonListHeader, IonLabel, IonHeader

    } from '@ionic/react';

import { nodeModuleNameResolver } from 'typescript';
import "./NumberList.css";

//look up how to build an artifact, seperate folder (/dist) 
//put artifact in that folder
//can put instead /dist
 

    type Item = {
        itemName: Array<string>;
        subItems?: {[category: string]: string[] | undefined;};
        updateBag?: Function;
    }
  

    const NumberList: React.FC<Item> = (item) => {
        const [showAlert1, setShowAlert1] = useState(false);

        const { itemName,subItems,updateBag } = item;

        //setShowAlert1(true)

        return(
            <IonList>
                {itemName && itemName.map((i) => {
                return (
                <IonList>
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
                            <IonButton slot= "end" color= "danger" onClick={() => {updateBag(i, element); setShowAlert1(true);}} expand="block">Add Item </IonButton> 
                            
                            <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={ i }
                    //subHeader={'Subtitle'}
                    message={'Would you like to keep shopping?'}
                    buttons= {[
                         {
                             text: 'Keep Shopping',
                             handler: () => {
                                console.log('Continued shopping');
                             }
                        },
                        {
                            text: 'Cart',
                            handler: () => {
                                console.log("Check out to Cart");
                            }
                        }
                        ]}
                    />
                        </IonItem>)
                    })}
                 

                {/* <IonItem key={i}>
                <p> header description </p>
                <IonButton slot= "end" color= "danger" onClick={() => setShowAlert1(true)} expand="block">Add Item </IonButton> 
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={ i }
                    //subHeader={'Subtitle'}
                    message={'Would you like to keep shopping?'}
                    buttons= {[
                         {
                             text: 'Keep Shopping',
                             handler: () => {
                                console.log('Continued shopping');
                             }
                        },
                        {
                            text: 'Cart',
                            handler: () => {
                                console.log("Check out to Cart");
                            }
                        }
                        ]}
                    />
                  
                </IonItem> */}
                </IonList>
                )})}
                
            </IonList>
            
        );
        
    };
    
    export default NumberList;