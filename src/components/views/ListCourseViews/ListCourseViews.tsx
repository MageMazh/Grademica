import { 
    IonContent,  
    IonItem, 
    IonList, 
    IonLabel, 
    IonAvatar,
    IonCardHeader,
    IonButton,
    IonIcon,
    IonSplitPane,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonCol,
    IonRow,
    IonButtons,
    IonRouterLink,
   } from '@ionic/react';
import Navbar from '../../navbar';
import Menu from '../../menu';
import "./ListCourseViews.css"
import { IonSearchbar } from '@ionic/react';
import { courseData } from '../../../mockData/CourseData';

  
  
  const ListCourseViews: React.FC = () => {

      return (
        <>
        <Navbar />
        <IonSplitPane className="split-pane" when="xs" contentId="main">
          <Menu />
          <div className="ion-page" id="main">
            <IonContent className="dashboard ion-padding">
                <h1>List Matakuliah</h1>
                <IonCard className='card-list-matakuliah'>
                  <div className='search-bar-listmatkul'>
                    <IonButton className="button-add-matkul" routerLink="/perkuliahan/add-course">Add Mata Kuliah</IonButton>
                    <IonSearchbar className='search-bar-list-matkul' ></IonSearchbar>
                  </div>
                    <IonGrid>
                        <IonRow className="border-bottom">
                        <IonCol className='col-1' size="0.7"><IonLabel>No</IonLabel></IonCol>
                        <IonCol className='col-1' size="3.3"><IonLabel>Mata Kuliah</IonLabel></IonCol>
                        <IonCol className='col-1' size="1.5"><IonLabel>Kode</IonLabel></IonCol>
                        <IonCol className='col-1' size="1.5"><IonLabel>Jenjang</IonLabel></IonCol>
                        <IonCol className='col-1' size="1.5"><IonLabel>SKS</IonLabel></IonCol>
                        <IonCol className='col-1' size="1.5"><IonLabel>Semester</IonLabel></IonCol>
                        <IonCol className='col-1' size="2"><IonLabel>Action</IonLabel></IonCol>
                        </IonRow>
                        {courseData.map((item) => (
                        <IonRow key={item.no}>
                            <IonCol className='col-1' size="0.7"><IonLabel>{item.no}</IonLabel></IonCol>
                            <IonCol className='col-1' size="3.3"><IonLabel>{item.name}</IonLabel></IonCol>
                            <IonCol className='col-1' size="1.5"><IonLabel>{item.code}</IonLabel></IonCol>
                            <IonCol className='col-1' size="1.5"><IonLabel>{item.level}</IonLabel></IonCol>
                            <IonCol className='col-1' size="1.5"><IonLabel>{item.sks}</IonLabel></IonCol>
                            <IonCol className='col-1' size="1.5"><IonLabel>{item.semester}</IonLabel></IonCol>
                            <IonCol className='col-1' size="2">
                            <IonButtons>
                            <IonButton color={'primary'} routerLink='/perkuliahan/edit-course'>edit</IonButton>
                            <IonButton color={'primary'}>detail</IonButton>
                            </IonButtons>
                            </IonCol>
                        </IonRow>
                        ))}
                    </IonGrid>
                    </IonCard>
            </IonContent>
          </div>
        </IonSplitPane>                                 
      </>
    );
};
  
export default ListCourseViews;
  