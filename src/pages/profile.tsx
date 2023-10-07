import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/react';
import './Home.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">test</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList lines="full">
          {/* 1. Profile Account */}
          <IonItem><IonLabel>Account</IonLabel></IonItem>
          
          <IonItem>
            <IonList lines="inset">
              {/* list 1 */}
              <IonItem><IonLabel>Nama :</IonLabel></IonItem>
              {/* list 2 */}
              <IonItem><IonLabel>NIP :</IonLabel></IonItem>
              {/* list 3 */}
              <IonItem><IonLabel>Email :</IonLabel></IonItem>

            </IonList>
          </IonItem>

          {/* 2. Personal data */}
          <IonItem><IonLabel>Data Pribadi</IonLabel></IonItem>

          <IonItem>
            <IonList>

              {/* list 1 */}
              <IonItem><IonLabel>Tempat & Tanggal Lahir :</IonLabel></IonItem>
              {/* list 2 */}
              <IonItem><IonLabel>Gander :</IonLabel></IonItem>
              {/* list 3 */}
              <IonItem><IonLabel>Agama :</IonLabel></IonItem>
              {/* list 4 */}
              <IonItem><IonLabel>WhatsApp :</IonLabel></IonItem>

            </IonList>  
          </IonItem>

          {/* 3. Alamat Domisili */}
          <IonItem><IonLabel>Alamat</IonLabel></IonItem>

          <IonItem>
            <IonList>

              {/* list 1 */}
              <IonItem><IonLabel>Alamat Domisili :</IonLabel></IonItem>
              {/* list 2 */}
              <IonItem><IonLabel>RT/RW :</IonLabel></IonItem>
              {/* list 3 */}
              <IonItem><IonLabel>Provinsi :</IonLabel></IonItem>
              {/* list 4 */}
              <IonItem><IonLabel>Kota/Kabupaten :</IonLabel></IonItem>
              {/* list 5 */}
              <IonItem><IonLabel>Kecamatan :</IonLabel></IonItem>
              {/* list 6 */}
              <IonItem><IonLabel>Kelurahaan/Desa :</IonLabel></IonItem>

            </IonList>  
          </IonItem>
          


        </IonList>


        {/* <ExploreContainer /> */}
      </IonContent>
      
    </IonPage>
  );
};

export default Profile;