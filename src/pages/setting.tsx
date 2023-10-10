import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonLabel,
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonText,
} from "@ionic/react";
import "./setting.css";

const Setting: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <IonGrid>
          <IonRow>
            <IonCard className="card-1-column">
              <IonCardHeader>
                <IonCardTitle>Website Information</IonCardTitle>
                <IonCardSubtitle>
                  Setting Informasi about your website
                </IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent className="card-content">
                <IonRow className="row-title">
                  <IonTextarea
                    label="Website Title"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter Title"
                  ></IonTextarea>
                  <IonTextarea
                    label="Website Description"
                    labelPlacement="floating"
                    fill="outline"
                    placeholder="Enter Description"
                  ></IonTextarea>
                </IonRow>
                <IonRow className="justify-content-end">
                  <IonButton className="button" size="large" fill="outline">
                    Save
                  </IonButton>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="card">
                <IonCardHeader>
                  <IonCardTitle>Change Language</IonCardTitle>
                  <IonCardSubtitle>Wich language do you use</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className="card-content">
                  <IonRow className="row">
                    <IonSelect aria-label="Fruit" placeholder="Select language">
                      <IonSelectOption value="Indonesia">
                        Indonesia
                      </IonSelectOption>
                      <IonSelectOption value="English">English</IonSelectOption>
                      <IonSelectOption value="China">China</IonSelectOption>
                    </IonSelect>

                    <IonButton className="button" size="large" fill="outline">
                      Save
                    </IonButton>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card">
                <IonCardHeader>
                  <IonCardTitle>Social Link</IonCardTitle>
                  <IonCardSubtitle>
                    Change old password to new password
                  </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className="card-content">
                  <IonRow className="row">
                    <IonInput
                      className="input"
                      label="Facebook"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="https://"
                    ></IonInput>
                    <IonInput
                      className="input"
                      label="Instagram"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="https://"
                    ></IonInput>
                    <IonInput
                      className="input"
                      label="Twitter"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="https://"
                    ></IonInput>
                    <IonInput
                      className="input"
                      label="Youtube"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="https://"
                    ></IonInput>
                    <IonButton className="button" size="large" fill="outline">
                      Save
                    </IonButton>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="card">
                <IonCardHeader>
                  <IonCardTitle>Change Password</IonCardTitle>
                  <IonCardSubtitle>
                    Change old password to new password
                  </IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent className="card-content">
                  <IonRow className="row">
                    <IonInput
                      className="input"
                      label="Old Passoword"
                      type="password"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter Old Password"
                    ></IonInput>
                    <IonInput
                      className="input"
                      type="password"
                      label="New Passoword"
                      labelPlacement="floating"
                      fill="outline"
                      placeholder="Enter New Password"
                    ></IonInput>
                    <IonButton className="button" size="large" fill="outline">
                      Save
                    </IonButton>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
