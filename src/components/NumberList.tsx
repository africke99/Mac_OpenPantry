import React, { Component, FC } from 'react';
    import {
        IonList, IonItem
    } from '@ionic/react';
    
    //import data from '../data/data.json';
    
    type Props = {
        number: any;
    };
    
    const NumberList: React.FC<Props> = ( props ) => {
        const { number } = props;
        let numList = Array.from(Array(number).keys());
        return(
            <IonList>
                {numList.map((i) => {
                return (<IonItem key={i}>
                    
                <p>number {i}</p>
                    
                    
                </IonItem>
                )})}
            </IonList>
            
        );
        
    };
    
    export default NumberList;