import React, { Component, FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import {
        IonList, IonItem, IonButton, IonAlert
    } from '@ionic/react';

    
    

    type Item = {
        itemName: Array<string>;
    }
    const NumberList: React.FC<Item> = ( item ) => {
        const [showAlert1, setShowAlert1] = useState(false);
        const { itemName } = item;
    
        return(
            <IonList>
                {itemName.map((i) => {
                return (
                <IonItem key={i}>
                <p> {i} </p>
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
                            onClick= {e  => {
                                e.preventDefault()
                                history.push('/dashboad/tab3/3');
                            }
                            }
                            handler: () => {
                                console.log("Check out to Cart");
                            }
                        }
                        ]}
                    />
                  
                </IonItem>
                )})}
                
            </IonList>
            
        );
        
    };
    
    export default NumberList;