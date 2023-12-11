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
import Profile from "./pages/profile";
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
import AdminDashboard from "./pages/AdminDashboard";
import AdminCreateUser from "./pages/AdminCreateUser";
import AdminAddUser from "./pages/AdminAddUser";
import AdminProfile from "./pages/AdminProfile";
import AdminProfileEdit from "./pages/AdminProfileEdit";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route
        exact
        path="/dashboard"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <Dashboard /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/perkuliahan/list-mahasiswa"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ListCollegeStudent /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/perkuliahan"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ListCourse /> : <NotFound />;
        }}
      />

      <Route
        path="/perkuliahan/edit-course/:id"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <EditCourse /> : <NotFound />;
        }}
      />

      <Route
        path="/perkuliahan/add-course"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <AddCourse /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/perkuliahan/list-mahasiswa"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ListCollegeStudent /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/perkuliahan/list-mahasiswa/:id"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ListCollegeStudent /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/perkuliahan/list-mahasiswa/:id/input-nilai"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <InputGrade /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/about"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <About /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/profile"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <Profile /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/profile/change-password"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ChangePassword /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/profile/profile-edit"
        render={(props) => {
          return sessionStorage.getItem("user_role") === "user" ? <ProfileEdit /> : <NotFound />;
        }}
      />

      <Route
        exact
        path="/admin/dashboard"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminDashboard /> : <NotFound />
        )}
      />
      <Route
        exact
        path="/admin/create-user"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminCreateUser /> : <NotFound />
        )}
      />
      <Route
        exact
        path="/admin/create-user/add-user"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminAddUser /> : <NotFound />
        )}
      />

      <Route
        exact
        path="/admin/profile"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminProfile /> : <NotFound />
        )}
      />

      <Route
        exact
        path="/admin/profile/profile-edit"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminProfileEdit /> : <NotFound />
        )}
      />

      <Route
        exact
        path="/admin/profile/change-password"
        render={(props) => (
          sessionStorage.getItem("user_role") === "admin" ? <AdminProfileEdit /> : <NotFound />
        )}
      />
      
    </IonReactRouter>
  </IonApp>
);

export default App;
