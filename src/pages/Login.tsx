import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonImg, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>      
          <IonImg src="https://upload.wikimedia.org/wikipedia/id/9/95/Logo_UH.png" alt="Logounhas" ></IonImg>
            <IonInput label='Username' label-placement='floating' fill='outline' placeholder='Enter text' className='ion-margin-top' ></IonInput>
            <IonInput label='Password' label-placement='floating' fill='outline' placeholder='Enter text' type='password' className='ion-margin-top' ></IonInput>
            <IonButton type='submit' expand='full' className='ion-margin-top' color={'primary'} >
              Login
            </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
