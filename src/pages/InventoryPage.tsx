import React, { useState } from 'react';
import { IonContent, IonModal, IonFooter, IonHeader, IonItem, IonLabel, IonNote, IonPage, IonTitle, IonToolbar, IonList, IonButton, IonFab, IonIcon, IonFabButton, IonApp, IonBackButton, IonButtons, IonText, IonRouterLink } from '@ionic/react';
import './InventoryPage.css';
import InventoryDisplay from '../components/InventoryDisplay';
import { db } from '../components/Firebase/firebase2.js';
import {close, help, basketOutline, basketSharp, ellipse, fastFoodOutline, fileTrayFullOutline, square, triangle } from 'ionicons/icons';
import 'firebase/firestore';
import firebase from "firebase";
import MyModal from '../components/MyModal';

/**
 * Returns a Promis<string[]> that consists of all the string value document
 * names for the given collection passed into the function.
 * For the collection name given, for each document in the collection,
 * the document id (string) is added to the Promise<string[]>
 * 
 * @param collection A string that is the name of the collection that the 
 *                   documents are getting grabbed from
 */

async function returnAllDocs(collection:string): Promise<string[]>
{
  var returnArray:string[] = new Array(11);
  let i: number = 0;
  return db.collection(collection).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        returnArray[i]= doc.id;
        i++;
    });
    return returnArray;
  });
 
}
/**
   * No return, takes in an object that is the myBag which consists of
   * all the items taken by the customer
   * Iterates through the keys (collection name in firestore) and 
   * values (another keyvalue pair with the key of the item name and value of the quantity of item being ordered)
   * to change said item's quantity value in the firestore database
   * 
   * @param bag an object that consists of the a list of the items taken by user
*/

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

const InventoryPage: React.FC = () => {
  const [myModal, setMyModal] = useState({ isOpen: false });
  const [catList, setCatList] = useState<string[]>([]);
  const [docMap, setDocMap] = useState<{[category: string]: string[];}>({});
  
  let arrayOfDocs = returnAllDocs("Category Names");
  let categoryLists: string[];

  arrayOfDocs.then((docs: string[])=>{
    categoryLists = docs;
    setCatList(categoryLists);

    categoryLists.forEach(c => {
      let useDocsList = returnAllDocs(c);
      
      useDocsList.then((docs: string[])=>{
        let itemList: string[];
        itemList = docs;
        docMap[c] = itemList;
        setDocMap(docMap);
      });
    })    
  });
  
  const [myBag, setmyBag] = useState({});

  /**
   * Constant function with parameters name of firebase collection (string) and 
   * name of the item (string) being selected by user.
   * 
   * The bag in which the items are being added to is an object declared as a constant
   * 
   * If there is already an item of the same collection and item name in the bag,
   * it increments the quantity value. Otherwise, it creates a new item in the bag
   * and then increments the item quantity from 0 to 1
   * 
   * @param collection  a string that represents the name of the collection 
   *                    that the food item is associated with in firebase, 
   *                    the category name the food item falls under
   * @param name        a string that represents the name of the food item being 
   *                    taken by the user and the document name in firebase to 
   *                    correlate with the item and collection name it falls 
   *                    under
   */
  const updateBag = (collection:string, name:string) => {
    if (!(collection in myBag)) {
      myBag[collection] = {}
    }
    if (!(name in myBag[collection])){
      myBag[collection][name] = 0;
    }
    myBag[collection][name]++;
    setmyBag(myBag);
  }

  const [questionModal, setQuestionModal] = useState({ isOpen: false });

  return (
    <IonApp>
        <IonPage>
            <IonContent fullscreen>
                <IonToolbar>
                    <IonButton color = "secondary" slot="start">
                        <IonBackButton defaultHref="homepage" />
                    </IonButton>
                    <IonButton slot="end" onClick={() => setQuestionModal({isOpen:true})}>
                        <IonIcon slot= "icon-only" icon ={help}> </IonIcon>
                    </IonButton>
                <IonTitle color="secondary">Pantry Inventory</IonTitle>
                </IonToolbar>
                <QuestionModal isOpen={questionModal.isOpen} onClose={() => setQuestionModal({isOpen:false})}/>
                <IonButtons slot= "primary">
                    <IonButton>
                        <IonIcon slot= "icon-only" name = "close">
                        </IonIcon>
                    </IonButton>
                </IonButtons><QuestionModal isOpen={questionModal.isOpen} onClose={() => setQuestionModal({isOpen:false})}/>
                <IonButtons slot= "primary">
                    <IonButton>
                        <IonIcon slot= "icon-only" name = "close">
                        </IonIcon>
                    </IonButton>
                </IonButtons>
                    <IonButton slot= "end" color= "danger" ></IonButton>
                    <p className="ion-padding-start ion-padding-end"> </p>
                    <InventoryDisplay itemName={catList} subItems={docMap} updateBag = {updateBag} setMyModal={setMyModal}></InventoryDisplay>
                     <p className="ion-padding-start ion-padding-end"></p> 
            </IonContent>
                <MyModal 
                    myBag={myBag}
                    isOpen={myModal.isOpen} 
                    onClose={() => {setMyModal({isOpen:false});updateFirestore(myBag);}}/>
            <IonFooter>
              <IonToolbar>
                <IonButton className= "btnpadding" size= "large" color= "danger" id="myBag" slot="end" onClick={() =>  setMyModal({isOpen:true})}>My Bag
                </IonButton>
              </IonToolbar>
            </IonFooter>
        </IonPage>
    </IonApp>
  );
};
export default InventoryPage;

/**
 * The QuestionModal is the pop up that appears when the "?" button is pressed.
 * On the pop up is an explanation of the app for first time users and a link
 * to the Open Pantry's google form to request items for the pantry or make
 * any other comments on the app or the pantry itself
 */
const QuestionModal:React.FC<any> = ({isOpen, onClose}) => {

  return <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              Welcome to the Open Pantry
            </IonTitle>
            <IonButton color= "secondary" slot ="end" onClick={onClose} >
              <IonIcon slot= "icon-only" icon ={close}>
              </IonIcon>
            </IonButton>
          </IonToolbar>
        </IonHeader>
        <IonContent className ="ion-padding">
          <IonText>
            <h3>
              Welcome to the Mac Open Pantry!
              Navigate through the inventory and add the items you are planning to take.
              Click add item for each individual item you are taking.  
              Click 'My Bag' to view the items you have taken and finalize your visit.
              Can't find an item? Request an item or make suggestions <IonRouterLink 
                color= "secondary" href="https://forms.gle/1hjgX7uVwRH3DfXs5" target="_blank"> here!
              </IonRouterLink>
               The Open Pantry is restocked every Thursday.
            </h3>
          </IonText>
        </IonContent>
      </IonModal>
}