import React, { Component, FC } from 'react';
    import {
        IonList, IonItem
    } from '@ionic/react';
    
    //import data from '../data/data.json';
    
    type Props = {
        number: any;
    };

    type Item = {
        itemName: Array<string>;
    }

    const NumberList: React.FC<Item> = ( item ) => {
        const { itemName } = item;

        return(
            <IonList>
                {itemName.map((i) => {
                return (<IonItem key={i}>
                    
                <p> {i} </p>
                    
                </IonItem>
                )})}
            </IonList>
            
        );
        
    };
    
    export default NumberList;