import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './Moddels/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      "Destination de rêve", 
      "Toujours au soleil", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZGCQ9jac_mKUSNpIZcWJEQFnZpgvgzi_SA&s", 
      new Date(), 
      0
    );
    this.mySnap.setLocation("à la plage");

    this.myOtherSnap = new FaceSnap(
      "Boisson de rêve", 
      "Le plein de vitamines", 
      "https://images.anaca3.com/wp-content/uploads/2018/05/combien-de-calories-dans-un-jus-de-fruits-de-la-passion-702x336.jpg", 
      new Date(), 
      0
    );

    this.myLastSnap = new FaceSnap(
      "Des vacances parfaites", 
      "On se sent bien", 
      "https://images.goelia.com/sigo/images/menu/VP_28.jpg?v=15", 
      new Date(), 
      0
    );
  }
}
