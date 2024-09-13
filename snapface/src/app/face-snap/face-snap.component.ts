import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Moddels/face-snap';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  @Input() facesnap!: FaceSnap;

  hasSnapped!:boolean;
  textSnapButton!:string;

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
    this.facesnap.snaps++;
    this.textSnapButton = "Oops, un Snap!";
    this.hasSnapped = true;
  }

  unSnap() {
    this.facesnap.snaps--;
    this.textSnapButton = "Oh snap!";
    this.hasSnapped = false;
  }
}
