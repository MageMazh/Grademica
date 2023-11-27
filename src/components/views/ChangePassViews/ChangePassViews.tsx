import React, { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import { Link } from "react-router-dom";
import "./ChangePassViews.css"

const profileUrl = "/profile"

const ChangePassViews: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = () => {
    console.log("Perubahan kata sandi berhasil");
  };

  return (
    <IonContent className="pass__ioncontent">
      
      <IonGrid className="pass__grid">
        <IonRow>
          <IonCol>
            <IonCard className="pass__mycard">
            
            <IonCardTitle className="pass__card-title">
              Ubah Kata Sandi
            </IonCardTitle>
              
              <IonCardContent className="Pass__Cardcontent">

                <IonItem>
                  <IonLabel position="floating">Kata Sandi Saat Ini</IonLabel>
                  <IonInput
                    type="password"
                    value={currentPassword}
                    onIonChange={(e) => setCurrentPassword(e.detail.value!)}
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Kata Sandi Baru</IonLabel>
                  <IonInput
                    type="password"
                    value={newPassword}
                    onIonChange={(e) => setNewPassword(e.detail.value!)}
                  ></IonInput>
                </IonItem>

                <IonItem>
                  <IonLabel position="floating">Konfirmasi Kata Sandi Baru</IonLabel>
                  <IonInput
                    type="password"
                    value={confirmNewPassword}
                    onIonChange={(e) => setConfirmNewPassword(e.detail.value!)}
                  ></IonInput>
                </IonItem>

                <div className="button-account">
                  <Link to={profileUrl}>
                    <IonButton className="pass__btn-batal">
                      batal
                    </IonButton>
                  </Link>

                  <Link to={profileUrl}>
                    <IonButton expand="full" onClick={handleChangePassword}>
                      Simpan Perubahan
                    </IonButton>
                  </Link>    
                </div>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ChangePassViews;
