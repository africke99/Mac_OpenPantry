import React, { Component, FC, useState } from 'react';
    import {
        IonList, IonItem, IonButton, IonAlert
    } from '@ionic/react';
    
    //import data from '../data/data.json';
    
    // type Props = {
    //     number: any;
    // };

    type Item = {
        itemName: Array<string>;
    }
    //slot= "end" color= "danger"> Add Item
    const NumberList: React.FC<Item> = ( item ) => {
        const [showAlert1, setShowAlert1] = useState(false);
        const { itemName } = item;
        return(
            <IonList>
                {itemName.map((i) => {
                return (<IonItem key={i}>
                <IonButton slot= "end" color= "danger" onClick={() => setShowAlert1(true)} expand="block">Add Item </IonButton> 
                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    cssClass='my-custom-class'
                    header={'You added item to you cart' }
                    //subHeader={'Subtitle'}
                    message={'Would you like to keep shopping?'}
                    buttons={['Keep Shopping', 'Cart']}
                    />
                <p> {i} </p>  
                </IonItem>
                )})}
            </IonList>
            
        );
        
    };
    
    export default NumberList;