# reactux-boilerplate
Basic React,Redux and Firebase Boilerplate Dashboard Code for some fast prototyping.
This template code utilizes :

* firebase/auth: For authentication
* react-router: Navigating between Dashboard and Login component
* redux: Implementing logic for signIn action

## How does it work?
Default, is no user object is present, the /login route and Login component is shown. The root component App.js 
tries to fetch a user from firebase with the entered credentials in the login form. The Dashboard then checks
for a user object. 

If no user is present, it simply redirects to the Login component again. Only if the user object is present (from a 
valid login), the Dashboard component finally mounts.

This envokes the ProviderStore from redux, to make the user object available throughout the components tree.
Modularity of the project enables fast extension with custom redux logic and react design elements.

## Structure
Important elements:
```
├── public                     # Unchanged from npx create-react-app
├── src                        # Application source code
   ├── index.js               # Provider store implemented here
   ├── App.js                 # BrowserRouter is handling routes 
   └── components             # Components named after routes
   │   ├── Dashboard.jsx      # Standard Dashboard. Redirect to /login if(!user)
   │   ├── Login.jsx          # Basic login form. 
   │   └── common             # Folder for common ui elements
   │       ├── Navbar.jsx     # Fixed Navbar for ui
   ├── config                 # Components that dictate major page structure
   │   └── firebase.js        # Contains firebase config details
   ├── redux                  # Logic part
       ├── types.js           # Message types defined here
       ├── store.js           # Serves the store
       ├── actions            # Contains all redux actions
       │   └── authActions.js # Login logic
       └── reducers           # Contains message reducers
           ├── authReducer.js # Handles the auth messages
           └── rootReducer.js # Combines all reducers
```
## Start the project
1. Adapt your firebase config details in config/firebase.js

    ```javascript
    var config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    ```
2. Call
    ```
    yarn install
    ```
    ```
    yarn start
    ```
   and visit the running project under localhost:3000.
   
## Development
To add new functionality, for example a new route and component, simply do this:
1. Add a new .jsx Component under components/, for example Demo.jsx:
    ```javascript
    class Demo extends React.Component {
     render() {
        return (
          <div>
            Demo component...
          </div>
        );
      }
    }
    ```

2. Import in App.js and add a new route /demo to display the component's content.
    ```javascript
    render(){
        return (
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Redirect to="/dashboard" />}
              />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/demo" component={Demo} />
            </Switch>
          </BrowserRouter>
        );
      }
    ```
   
Redux tutorial coming soon..