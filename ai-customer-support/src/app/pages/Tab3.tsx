import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { menuOutline } from 'ionicons/icons';
import { settingsOutline } from 'ionicons/icons'
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
        <div className='toolBarItems'>
            <IonIcon icon={menuOutline} className="icon" size='large' color='light'/>
            <IonTitle className='title'>PROFILE</IonTitle>
            <IonIcon icon={settingsOutline} className='icon' size='large' color='light'></IonIcon>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
