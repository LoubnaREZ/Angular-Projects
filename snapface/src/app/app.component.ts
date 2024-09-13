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
  mySnap!: FaceSnap

  ngOnInit(): void {
    this.mySnap = new FaceSnap("Destination de rêve", "Mes prochaines vacances", 
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZGCQ9jac_mKUSNpIZcWJEQFnZpgvgzi_SA&s", new Date(), 0);
  }
}
