import FirebaseContext from './context.js';
import Firebase from './src/Components/Firebase/Firebase.js';
 
export default Firebase; 
 
export default { FirebaseContext };

//The Firebase Context from the Firebase module (folder) is used to provide a Firebase instance 
//to your entire application in the src/index.js file. You only need to create the Firebase instance 
//with the Firebase class and pass it as value prop to the React's Context: