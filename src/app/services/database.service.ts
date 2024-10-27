import { Injectable } from '@angular/core';
import { addDoc, collection, doc, getDoc, getFirestore, setDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { FormGroup } from '@angular/forms';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { ToastController } from '@ionic/angular';

const app = initializeApp(environment.firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private auth: AuthenticationService, private toastController: ToastController) { }

    async load(formLogin: FormGroup<any>, uid: string, carpeta: string) {
      try {
        const userDocRef = doc(db, `${carpeta}/${uid}`);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          formLogin.patchValue(userDoc.data() as any);
        } else {
          console.error('Document does not exist');
        }
      } catch (error) {
        console.error('Error ', error);
      }
    }
  
    async onSubmit(formLogin: FormGroup<any>, uid: string, carpeta: string) {
      if (formLogin.valid) {
        try {
          const userDocRef = doc(db, `${carpeta}/${uid}`);
          await setDoc(userDocRef, formLogin.value);
          
          this.presentToast();
          console.log('Perfil actualizado correctamente');
          this.load(formLogin, uid, carpeta);

        } catch (error) {
          console.error('Error :', error);
        }
      }
    }

    async getUserBets(uid: string) {
      const betsCollectionRef = collection(db, 'Apuestas'); // Asegúrate de que esta colección exista
      const betsQuery = query(betsCollectionRef, where('userId', '==', uid)); // Aquí se usa query y where
      const betDocs = await getDocs(betsQuery);
      
      // Retorna los datos de las apuestas
      return betDocs.docs.map(doc => doc.data());
    }

    async presentToast() {
      const toast = await this.toastController.create({
        header: 'Datos guardados. ',
        message: 'Operación existosa',
        duration: 4500,
        position: 'top', 
        buttons: [
          {
            icon: 'close',
            role: 'cancel',
          }
        ]
      });
      toast.present();
    }

}
