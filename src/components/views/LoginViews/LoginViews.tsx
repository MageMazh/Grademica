import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./LoginViews.css";
import logounhas from "../../../assets/images/Logo_UH.webp";

const LoginViews: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="login_background">
        <IonGrid className="login-grid">
          <IonRow>
            <IonCol>
              <IonCard className="login_card">
                <h1 className="text_1">Grademica</h1>
                <IonImg src={logounhas}></IonImg>
                <IonInput
                  className="login_input_username"
                  label="Username"
                  label-placement="floating"
                  fill="solid"
                  placeholder="Enter text"
                ></IonInput>
                <IonInput
                  className="login_input_password"
                  label="Password"
                  label-placement="floating"
                  fill="solid"
                  placeholder="Enter text"
                  type="password"
                ></IonInput>
                <IonButton
                  className="login_button"
                  type="submit"
                  expand="full"
                  color={"primary"}
                >
                  Login
                </IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default LoginViews;
