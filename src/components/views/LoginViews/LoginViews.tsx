import {
  IonAlert,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonRow,
  useIonLoading,
} from "@ionic/react";
import "./LoginViews.css";
import logounhas from "../../../assets/images/Logo_UH.webp";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../../firebase/firebase";
import { useState } from "react";
import Cookies from "js-cookie";
import { doc, getDoc } from "firebase/firestore";

const LoginViews: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertWrong, setAlertWrong] = useState(false);
  const [showIonLoading, dismissIonLoading] = useIonLoading();
  const history = useHistory();

  const signIn = async () => {
    try {
      // Perform the login
      showIonLoading("Loading");
      
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(firestore, "users", user.email!);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          sessionStorage.setItem("user_id", user.email!);
          sessionStorage.setItem("user_role", userDocSnap.data().role);

          dismissIonLoading();
          if (userDocSnap.data().role === "admin") {
            history.push("/admin/dashboard");
          } else {
            history.push("/dashboard");
          }
        }
      }
    } catch (error) {
      // Handle login failure
      dismissIonLoading();
      setAlertWrong(true);
      console.error("Error signing in:", error);
    }
  };

  return (
    <>
      <IonAlert
        isOpen={alertWrong}
        trigger="present-alert"
        header="Username dan password yang dimasukkan kurang tepat"
        buttons={[
          {
            text: "OK",
          },
        ]}
        onDidDismiss={() => setAlertWrong(false)}
      ></IonAlert>
      <IonContent className="login_background">
        <IonGrid className="login-grid">
          <IonRow>
            <IonCol>
              <IonCard className="login_card">
                <h1 className="text_1">Grademica</h1>
                <IonImg className="logounhas" src={logounhas}></IonImg>
                <IonInput
                  className="login_input_username"
                  label="Username"
                  label-placement="floating"
                  fill="solid"
                  placeholder="Enter text"
                  onIonInput={(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;
                    setEmail(value);
                  }}
                ></IonInput>
                <IonInput
                  className="login_input_password"
                  label="Password"
                  label-placement="floating"
                  fill="solid"
                  placeholder="Enter text"
                  type="password"
                  onIonInput={(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;

                    setPassword(value);
                  }}
                ></IonInput>
                <IonButton
                  className="login_button"
                  type="submit"
                  expand="full"
                  color={"primary"}
                  onClick={signIn}
                >
                  Login
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </>
  );
};

export default LoginViews;
