import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonLoading,
  IonToast 
} from '@ionic/react';
import React, { useState } from 'react';
import './Home.css'; 

const Home: React.FC = () => {
  const [numberInput, setNumberInput] = useState<string>('');
  const [sequence, setSequence] = useState<number[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState<boolean>(false); 

  
  const backendPort = 5001; 

  const generateCollatzSequence = async () => {
    setError(null); 
    setSequence(null); 
    setShowToast(false); 
    setLoading(true); 

    const num = parseInt(numberInput);

    if (isNaN(num) || num <= 0) {
      setError('Por favor, introduce un número entero positivo.');
      setShowToast(true); 
      setLoading(false);
      return;
    }

    try {
      
      const response = await fetch(`http://localhost:${backendPort}/collatz/${num}`);
      const data = await response.json();

      if (response.ok) {
        setSequence(data.sequence);
      } else {
        setError(data.error || 'Error al obtener la secuencia.');
        setShowToast(true); 
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Asegúrate de que el backend esté ejecutándose.');
      setShowToast(true); 
      console.error(err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Conjetura de Collatz</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonInput
          label="Introduce un número"
          labelPlacement="floating"
          type="number"
          value={numberInput}
          onIonChange={(e) => setNumberInput(e.detail.value!)}
          className="ion-margin-bottom"
          placeholder="Ej: 6"
        ></IonInput>

        <IonButton expand="block" onClick={generateCollatzSequence} className="ion-margin-bottom">
          Generar Secuencia
        </IonButton>

        <IonLoading isOpen={loading} message="Generando..." spinner="lines" />

        {sequence && (
          <IonList>
            <IonItem>
              <IonLabel>
                <h2>Secuencia Generada:</h2>
                <IonText color="primary">
                  {/* Muestra la secuencia separada por flechas */}
                  <p>{sequence.join(' → ')}</p>
                </IonText>
              </IonLabel>
            </IonItem>
          </IonList>
        )}

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={error || ""}
          duration={3000}
          color="danger"
        />

      </IonContent>
    </IonPage>
  );
};

export default Home;