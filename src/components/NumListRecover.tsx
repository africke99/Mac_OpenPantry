import React, { Component, FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import {


        IonList, IonItem, IonButton, IonAlert, IonListHeader, IonLabel, IonHeader

    } from '@ionic/react';

    
    

    type Item = {
        itemName: Array<string>;
    }

    // function iterateList(list:Array<string>){
    //     for
    // }


    const NumberList: React.FC<Item> = ( item ) => {
        const [showAlert1, setShowAlert1] = useState(false);
        const { itemName } = item;
    
        return(
            <IonList>
                {itemName.map((i) => {
                return (
                <IonList>
                    <IonListHeader>
                        <IonLabel>
                            {i}
                        </IonLabel>
                    </IonListHeader>
                <IonItem key={i}>
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
                  
                </IonItem>
                </IonList>
                )})}
                
            </IonList>
            
        );
        
    };
    
    export default NumberList;