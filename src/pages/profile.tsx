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
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
 } from '@ionic/react';

import './profile.css';
import Navbar from '../components/navbar';
import Menu from '../components/menu/Menu';

const Profile: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>

        {/* memasukkan komponen navbar */}
        <Navbar/>
        
        <div>
          {/* Membuat Tata Letaknya */}
          <IonGrid>
            <IonRow>
              {/* Memasukkan komponen Menu ke tata letak kiri */}
              <IonCol className='Col-Menu'><Menu/></IonCol>
              {/* Memasukkan Profile Car ke tengah */}
              <IonCol>
                {/* Membuat Profile Card */}
                <IonCard className='profile-card'>
                  <IonAvatar>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <h3 className="Nama-Profile-Card">Nama User</h3>
                  <h4 className="Prodi-Profile-Card">Teknik Informatika</h4>
                </IonCard>
              </IonCol>
              {/* Memasukkan Data Profile Ke bagian kanan */}
              <IonCol>
                <IonCard>
                  {/* Header Data Profile */}
                  <IonCardHeader>
                    <IonCardTitle>Profile</IonCardTitle>
                  </IonCardHeader>
            
                  {/* Isi Data Profile */}
                  <IonCardContent>
                    <IonList lines="inset">
                      {/* list 1 */}
                      <IonItem>
                        <IonLabel>Nama </IonLabel>
                      </IonItem>
                      {/* list 2 */}
                      <IonItem>
                        <IonLabel>Tempat & Tanggal Lahir</IonLabel>
                      </IonItem>
                      {/* list 3 */}
                      <IonItem>
                        <IonLabel>Alamat</IonLabel>
                      </IonItem>
                      {/* List 4 */}
                      <IonItem>
                        <IonLabel>No.Handphone</IonLabel>
                      </IonItem>
                      {/* List 5 */}
                      <IonItem>
                        <IonLabel>Email</IonLabel>
                      </IonItem>
                      {/* list 6 */}
                      <IonItem>
                        <IonLabel>NIP</IonLabel>
                      </IonItem>
                      {/* List 7 */}
                      <IonItem>
                        <IonLabel>NIDN</IonLabel>
                      </IonItem>
                      {/* list 8 */}
                      <IonItem>
                        <IonLabel>Jabatan Struktural</IonLabel>
                      </IonItem>
                      {/* List 9 */}
                      <IonItem>
                        <IonLabel>Jabatan Fungsional</IonLabel>
                      </IonItem>
                    </IonList>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;