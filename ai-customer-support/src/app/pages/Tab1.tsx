import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonLabel, IonCheckbox, IonFab, IonFabButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { cameraOutline, menuOutline } from 'ionicons/icons';
import { settingsOutline } from 'ionicons/icons';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <div className='toolBarItems'>
            <IonIcon icon={menuOutline} className="icon" size='large' color='light'/>
            <IonTitle className='title'>PANTRY</IonTitle>
            <IonIcon icon={settingsOutline} className='icon' size='large' color='light'></IonIcon>
          </div>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div className='pantry-container'>
          <h1 className='bold-title'>Your Pantry Ingredient:</h1>
          <IonList inset={true}>
            <IonItem className='pantry-list'>
              <IonCheckbox>Tomato</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Bean</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Garlic</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Rice</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Jam</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Flour</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Vegatable Oil</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Honey</IonCheckbox>
            </IonItem>
            <IonItem className='pantry-list'>
              <IonCheckbox>Honey</IonCheckbox>
            </IonItem>
          </IonList>
        </div>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Pantry</IonTitle>
          </IonToolbar>
        </IonHeader>

      </IonContent>
      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton className='button-color'>
          <IonIcon icon={cameraOutline} size='large'></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Tab1;
