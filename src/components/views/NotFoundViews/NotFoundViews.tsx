import {
    IonButton,
    IonContent,
    IonImg,
    IonPage,
} from "@ionic/react";
import './NotFoundViews.css';
import image404 from "../../../assets/images/Error404.png"
import { useHistory } from "react-router";

const NotFoundViews: React.FC = () => {
    const history = useHistory(); // Inisialisasi useHistory

    const handleBack = () => {
        history.goBack();
    }
    return (
        <IonPage>
            <IonContent className="tes">
                <div className="not-found-container">
                    <IonImg className="Error404-image" alt="Error-404.img" src={image404} />
                    <h1 className="header404">ERROR 404 - Page Not Found</h1>
                    <p className="text404">Sorry, the page you are looking for does not exist.</p>
                    <IonButton className="btn-back-404" onClick={handleBack} expand="full" fill="solid" color="primary">Back</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default NotFoundViews;