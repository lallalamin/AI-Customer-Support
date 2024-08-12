import React, { useState } from 'react';
import { IonFab, IonFabButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { cameraOutline, menuOutline, timeOutline, chatboxEllipsesOutline, settingsOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import Fridgy from '../components/ChatBot';
import './Tab2.css';

// Example Chatbot Component
const Tab2: React.FC = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='toolbar'>
          <div className='toolBarItems'>
            <IonIcon icon={menuOutline} className="icon" size='large' color='light'/>
            <img className='logo' src="\android-chrome-192x192.png" alt="logo" />
            <IonTitle className='title'>HOME</IonTitle>
            <IonIcon icon={settingsOutline} className='icon' size='large' color='light'></IonIcon>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard className='card avatar-card'>
          <div className='welcome-card'>
            <img className='profile-img' src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg" alt="profile pic" />
            <IonCardHeader>
              <IonCardTitle className='bold-title'>Hello Bob!</IonCardTitle>
              <IonCardSubtitle>Scan your fridge for recommendation</IonCardSubtitle>
            </IonCardHeader>
          </div>
        </IonCard>
        <div className='rec-container'>
          <h1 className='bold-title'>Recommendation</h1>
          <div className='rec-section'>
            <IonCard className='card recipe-card'>
              <IonCardHeader>
                <IonCardTitle className='recipe-title'>Chicken Pasta Bake</IonCardTitle>
              </IonCardHeader>
              <img className='recipe-img' src="https://www.recipetineats.com/tachyon/2023/05/Chicken-pasta-bake_7.jpg" alt="recipe pic" />
              <IonCardSubtitle className='recipe-subtitle'>Ingredient Count: 10</IonCardSubtitle>
              <div className='time'>
                <IonIcon icon={timeOutline} className='icon' size='small'></IonIcon>
                <IonCardSubtitle>45 mins</IonCardSubtitle>
              </div>
            </IonCard>

            <IonCard className='card recipe-card'>
              <IonCardHeader>
                <IonCardTitle className='recipe-title'>Paneer Tikka Masala</IonCardTitle>
              </IonCardHeader>
              <img className='recipe-img' src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/paneer-tikka-masala.webp" alt="recipe pic" />
              <IonCardSubtitle className='recipe-subtitle'>Ingredient Count: 10</IonCardSubtitle>
              <div className='time'>
                <IonIcon icon={timeOutline} className='icon' size='small'></IonIcon>
                <IonCardSubtitle>45 mins</IonCardSubtitle>
              </div>
            </IonCard>

            <IonCard className='card recipe-card'>
              <IonCardHeader>
                <IonCardTitle className='recipe-title'>Sesame Chicken with Broccoli</IonCardTitle>
              </IonCardHeader>
              <img className='recipe-img' src="https://www.allrecipes.com/thmb/85GcnFUGnSr5eJUQy4DzZbO_4uw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8426412_Stir-Fried-Sesame-Chicken-with-Broccoli_Brenda-Venable_4x3-e2dbfb3eb4054112b7fdf78c023c5ace.jpg" alt="recipe pic" />
              <IonCardSubtitle className='recipe-subtitle'>Ingredient Count: 10</IonCardSubtitle>
              <div className='time'>
                <IonIcon icon={timeOutline} className='icon' size='small'></IonIcon>
                <IonCardSubtitle>45 mins</IonCardSubtitle>
              </div>
            </IonCard>

            <IonCard className='card recipe-card'>
              <IonCardHeader>
                <IonCardTitle className='recipe-title'>Tteokbokki</IonCardTitle>
              </IonCardHeader>
              <img className='recipe-img' src="https://mykoreankitchen.com/wp-content/uploads/2017/11/1.-Tteokbokki.jpg" alt="recipe pic" />
              <IonCardSubtitle className='recipe-subtitle'>Ingredient Count: 10</IonCardSubtitle>
              <div className='time'>
                <IonIcon icon={timeOutline} className='icon' size='small'></IonIcon>
                <IonCardSubtitle>45 mins</IonCardSubtitle>
              </div>
            </IonCard>
          </div>
        </div>
      </IonContent>
      <IonFab vertical='bottom' horizontal='end' slot='fixed'>
        <IonFabButton className='button-color'>
          <IonIcon icon={cameraOutline} size='large'></IonIcon>
        </IonFabButton>
        <IonFabButton className='button-color chat-icon' onClick={toggleChatbot}>
          <IonIcon icon={chatboxEllipsesOutline} size='large'></IonIcon>
        </IonFabButton>
      </IonFab>
      {isChatbotVisible && (
          <div className="chatbot-container">
            <Fridgy></Fridgy>
          </div>
        )}
    </IonPage>
  );
};

export default Tab2;
