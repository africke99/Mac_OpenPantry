# Mac Open Pantry
A web app to facilitate the organization of Mac Open Pantry

## About

As students in the "Software Development" course in the Macalester Computer Science Department, we recognized the need for automation of the pantry's inventory. Prior to this app, students were required to fill out a paper form about their visit. The app provides a backend database for organizing the pantry's inventory using Firebase's firestore. 
The Macalester College Open Pantry is located in the bottom floor of the Ruth Stricker Dayton Campus Center.
Anyone is welcome to visit and take what they need.

## For Users

- Open this [website link](https://africke99.github.io/Mac_OpenPantry.github.io/) and follow along with given instructions to navigate through the web app

## For Developers 

### Things to Download* and Open:

- The latest version of [Node.js and npm](https://ionicframework.com/docs/installation/environment). If not already installed, download [here](https://nodejs.org/en/download/).
- Make sure you have [Cordova](https://cordova.apache.org/) installed. If not, run `npm install -g cordova`.
- Make sure you have [Ionic CLI](https://ionicframework.com/docs/installation/cli) installed. If not, run `npm install -g @ionic/cli`. If there is a previous installation of the Ionic CLI, it will need to be uninstalled with `npm uninstall -g ionic`, and reinstalled with `npm install -g @ionic/cli`.
- Our app uses the React package, make sure to install this package with `npm install @ionic/react` and `npm install @ionic/react-router`
- Make sure to install all of the Ionic tooling with `npm install -g @ionic/cli native-run cordova-res`
- Make sure to download the firebase library. If you have yet to download it, run `npm install firebase`.
- Download or clone the Mac Open Pantry repository.
##### *all the imports can be installed in the Command Prompt or your code editor's terminal

### Testing the Web App

- In a terminal run `ionic serve` to preview the web app as a local host page
- To check if the database has been accurately updated, reference the Mac Open Pantry's Firebase Firestore database at this [link](https://console.firebase.google.com/u/1/project/mac-openpantry/firestore/).

### Deploying to GitHub Pages

- Create a new branch "gh-pages"
- In gitHub, navigate to settings, specify gh-pages as your branch, and /(root)
- In terminal: `npm run build`
- Copy the "build" and rename the copied folder to "dist"
- In terminal: `git add .`, `git commit -m "[insert message here]"`, `git push` to the master branch
- In terminal: `git subtree push --prefix dist origin gh-pages`
- Use the link in gitHub settings to navigate to your deployed web app!

## Build Status (as of 12/17/2020)

# Admin side access:
- Be able to add items/categories to the database
- Track frequency of items taken
- Track date/times/frequency of pantry visitors
- Printable form that shows all totals
# Future Implementations
- Fix formatting/font type/font+button sizes
- Integrate Local API (refresh danger)
- Add/Subtract item quantities in “My Bag”
- Integrate food icons for easier non-english speaker use
- Buy original domain name

## References Used in Development

- [Firebase Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial#manage-users-with-firebases-realtime-database-in-react)

- [Firebase React Tutorial](https://medium.com/technest/how-to-connect-firebase-cloud-firestore-to-your-react-app-1118fd182c60)

- [Integrating Firestore Tutorial](https://sebhastian.com/react-firestore/)

- [Deploying A Web App Tutorial](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)

- [Firebase Documentation Using Cloud Firestore](https://firebase.google.com/docs/firestore/)

- [Guidance for Using Typescript](https://www.typescriptlang.org/)

<<<<<<< HEAD
- [Ionic documentation for UI components](https://ionicframework.com/docs/components)
=======
- [Modal Tutorial](https://www.youtube.com/watch?v=Ez-1P8VhQiQ&t=363s&ab_channel=AaronSaunders)
>>>>>>> 37d63fc40fc6c21246f730f8a7c77b263dec2d05


## Developed By
- Craveiro, Lila
- Fricke, Augusta
- Lin, Grace
- Maya, Zully

## With the Help Of
- Professor Lauren Milne
- Professor Paul Canterell
- Nguyen, Anh
- Tian, Richard

