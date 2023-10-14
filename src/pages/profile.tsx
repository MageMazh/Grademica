import { 
  IonContent,  
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
  IonCol,
  IonSplitPane,
  IonButton
 } from '@ionic/react';

import './profile.css';
import Navbar from '../components/navbar';
import Menu from '../components/menu';

const Profile: React.FC = () => {
  return (
    <>
    {/* <IonPage> */}

      {/* <IonContent fullscreen> */}

        {/* memasukkan komponen navbar */}
        <Navbar/>
        
        {/* 1. Memasukkan komponen Menu ke tata letak kiri */}
        <IonSplitPane className="split-pane" when="xs" contentId="main">
          <Menu/>
          <div className="ion-page" id="main">
          <IonContent className="dashboard ion-padding">
            <h1>Profile</h1>
          {/* Membuat Tata Letaknya */}
          <IonGrid>
            <IonRow>
              {/* 2. Memasukkan Profile Car ke tengah */}
              <IonCol className='profile' size='3'>
                {/* Membuat Profile Card */}
                <IonCard className='profile__card'>
                  <IonAvatar className='BMM-profile-card'>
                    <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  </IonAvatar>
                  <h3 className="Nama-Profile-Card">Nama User</h3>
                  <h4 className="Prodi-Profile-Card">Teknik Informatika</h4>
                </IonCard>
              </IonCol>
              {/* 3. Memasukkan Data Profile Ke bagian kanan */}
              <IonCol className='data'>
                <IonCard className='data__profile'>
                  {/* Header Data Profile */}
                  <IonCardHeader className='header-data'>
                    <IonItem>
                    <IonCardTitle className='title-data'>Data Pribadi</IonCardTitle>
                    </IonItem>
                  </IonCardHeader>
            
                  {/* Isi Data Profile */}
                  <IonCardContent>
                    <IonList className='list-data' lines="inset">
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
                    <div className='button-account'>
                      <IonButton className='BTN-Change-Pass'>Ubah Sandi</IonButton>
                      <IonButton className='BTN-Edit-Profile'>Edit Profile</IonButton>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
          </IonContent>
          </div>
        </IonSplitPane>
      {/* </IonContent> */}
    {/* </IonPage> */}
    </>
  );
};

export default Profile;