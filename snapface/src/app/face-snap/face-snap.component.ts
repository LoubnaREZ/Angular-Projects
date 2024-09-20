import { Component, Input } from '@angular/core';
import { FaceSnap } from '../Models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() facesnap!: FaceSnap;

  constructor(private router: Router) {}

  onViewFaceSnap() : void {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.id}`);
  }
}
