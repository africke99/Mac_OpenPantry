import React, { Component, FC, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { db } from '../components/Firebase/firebase2.js';
import {
        IonList, IonItem, IonButton, IonAlert, IonListHeader, IonLabel, IonHeader
    } from '@ionic/react';   

    type Category = {
        CategoryName: Array<string>;
    }

    // function iterateList(list:Array<string>){
    //     for
    // }

    //----------------------------------------------------------------

    function returnAllDocs(collection:string): Array<string> {
        //let test: Array<string>=["",""]; 
        var returnArray:string[] = new Array(11);
        let i: number = 0;
        db.collection(collection).get().then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              returnArray[i]= doc.id;
              i++;
              
          });
          console.log(returnArray);
        });
        console.log(returnArray);   
        return returnArray;
        
      }
      
      // function getDocData(col:string): <string>() {}
        
      //for each 
        
    //----------------------------------------------------------------
    type Item = {
        ItemName: Array<string>;
    }
    const ItemList: React.FC<Item> = ( item ) => {
        const { ItemName } = item;

        return(
            <IonList>
                {ItemName.map((y) => {
                return (
            <IonList>
                    <IonListHeader>
                        <IonLabel>
                            {y}
                        </IonLabel>
                    </IonListHeader>
                <IonItem key={y}></IonItem>          
                </IonList>
                )})}
                
            </IonList>
            
        );
        
    };

    let arrayOfItems = returnAllDocs(i.stringify);  //// need to figure out how to create this variable AFTER the 
    //CategoryName.map is created.... because we need to pass each collection name to itemlist as it is displayed
    //by Numberlist


    //--------------------------------------------------------------------

    const NumberList: React.FC<Category> = ( category ) => {
        const [showAlert1, setShowAlert1] = useState(false);
        const { CategoryName } = category;
        
        return(
            <IonList>
                {CategoryName.map((i) => {
                return (    
                
                <IonList>
                    <IonListHeader>
                        <IonLabel>
                            {i}
                        </IonLabel>
                    </IonListHeader>
                <IonItem key={i}>
                <p> ...this is where items will go </p>
                <ItemList ItemName={arrayOfItems} ></ItemList>
                <p> TEST </p>
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