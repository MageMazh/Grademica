import {
    IonContent,
    IonItem,
    IonList,
    IonAvatar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonSplitPane,
    IonButton,
    IonInput
} from '@ionic/react';

import './ProfileEditViews.css';
import Navbar from '../../navbar';
import Menu from '../../menu';

const ProfileEditViews: React.FC = () => {
    const profileSaveUrl = "/profile"
    return (
        <>
            {/* memasukkan komponen navbar */}
            <Navbar />
            {/* 1. Memasukkan komponen Menu */}
            <IonSplitPane className="split-pane" when="xs" contentId="main">
                <Menu />
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
                        <IonCardTitle className="dashboard-card__information">
                          Data Pribadi
                        </IonCardTitle>

                        {/* Isi Data Profile */}
                        <IonCardContent>
                          <IonList className='list-data' lines="inset">
                            {[
                              'Nama',
                              'Tempat & Tanggal Lahir',
                              'Alamat',
                              'No.HandPhone',
                              'Email',
                              'NIP',
                              'NIDN',
                              'Jabatan Struktural',
                              'Jabatan Fungsional',
                            ].map((label, index) => (
                              <IonItem key={index}>
                                <IonInput className='input-data' label={label} labelPlacement="floating" placeholder={`Enter ${label}`} />
                              </IonItem>
                            ))}
                          </IonList>
                      <div className='button-account-save'>
                        <IonButton className='BTN-Save-Profile' routerLink={profileSaveUrl}>Simpan Perubahan</IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </div>
      </IonSplitPane>
    </>
  );
};

export default ProfileEditViews;
