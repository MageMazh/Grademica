import { Redirect, Route, Switch } from "react-router-dom";
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
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import ProfileEdit from "./pages/ProfileEdit";
import Dashboard from "./pages/Dashboard";
import ListCourse from "./pages/ListCourse";
import AddCourse from "./pages/AddCourse";
import EditCourse from "./pages/EditCourse";
import ListCollegeStudent from "./pages/ListCollegeStudent";
import NotFound from "./pages/NotFound";
import ChangePassword from "./pages/ChangePass";
import InputGrade from "./pages/InputGrade";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/perkuliahan" exact>
          <ListCourse />
        </Route>
        <Route path="/perkuliahan/add-course" exact>
          <AddCourse />
        </Route>
        <Route path="/perkuliahan/edit-course/:courseCode">
          <EditCourse />
        </Route>
        <Route path="/perkuliahan/list-mahasiswa" exact>
          <ListCollegeStudent />
        </Route>
        <Route exact path="/perkuliahan/list-mahasiswa/:courseCode">
          <ListCollegeStudent />
        </Route>
        <Route exact path="/perkuliahan/list-mahasiswa/:courseCode/input-nilai">
          <InputGrade />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/profile/change-password" exact>
          <ChangePassword />
        </Route>
        <Route path="/profile/profile-edit" exact>
          <ProfileEdit />
        </Route>
        <Route path="/not-found" exact>
          <NotFound />
        </Route>
        
        
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="/not-found" />
        
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
