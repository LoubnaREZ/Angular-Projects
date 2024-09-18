import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../Services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  hasSnapped!:boolean;
  textSnapButton!:string;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.hasSnapped = false;
    this.textSnapButton = "Oh snap!";
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
    this.faceSnapsService.snapFaceSnapById(this.facesnap.id);
    this.textSnapButton = "Oops, un Snap!";
    this.hasSnapped = true;
  }

  unSnap() {
    this.facesnap.removeSnap();
    this.textSnapButton = "Oh snap!";
    this.hasSnapped = false;
  }
}
