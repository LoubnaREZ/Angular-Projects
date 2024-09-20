import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../Services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  facesnap!: FaceSnap;
  hasSnapped!:boolean;
  textSnapButton!:string;

  constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.prepareInterface();

    this.getFaceSnap();
  }

  
  onSnap(): void {
    if (!this.hasSnapped)
      {
        this.snap();
      } else {
        this.unSnap();
      }
    }
    
    snap() {
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap');
    this.textSnapButton = "Oops, un Snap!";
    this.hasSnapped = true;
  }
  
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap');
    this.textSnapButton = "Oh snap!";
    this.hasSnapped = false;
  }

  private prepareInterface() {
    this.hasSnapped = false;
    this.textSnapButton = "Oh snap!";
  }
  
  private getFaceSnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    let faceSnapFound = this.faceSnapsService.getFaceSnapById(faceSnapId);
    if (!faceSnapFound)
      throw Error(`FaceSnap ${faceSnapId} not found !`);
  
    this.facesnap = faceSnapFound;
  }
}
