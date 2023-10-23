import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";


/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import About from "./pages/about";
import Profile from "./pages/profile";
import Login from "./pages/Login";
import ProfileEdit from "./pages/ProfileEdit";
import Dashboard from "./pages/Dashboard";
import ListCourse from "./pages/ListCourse";


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>

      {/* Untuk Sementara */}
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile-edit">
          <ProfileEdit />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/perkuliahan">
          <ListCourse />
        </Route>

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
