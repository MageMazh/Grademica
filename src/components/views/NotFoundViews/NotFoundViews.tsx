import {
    IonButton,
    IonContent,
    IonImg,
    IonPage,
} from "@ionic/react";
import './NotFoundViews.css';
import image401 from "../../../assets/images/401.png"
import { useHistory } from "react-router";

const NotFoundViews: React.FC = () => {
    const history = useHistory(); // Inisialisasi useHistory

    const handleBack = () => {
        history.goBack();
    }
    return (
        <IonPage className="nf404__Page">
            <IonContent className="tes">
                <div className="not-found-container">
                    <IonImg className="Error401-image" alt="Error-401.img" src={image401} />
                    <p className="text401">Sorry, access denied. Please log in with an authorized account to continue.</p>
                    <IonButton className="btn-back-401" onClick={handleBack} expand="full" fill="solid" color="primary">Back</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default NotFoundViews;
