import { Injectable } from "@angular/core";
import { FaceSnap } from "../Models/face-snap";
import { SnapType } from "../Models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          "Destination de rêve", 
          "Toujours au soleil", 
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3", 
          new Date(), 
          0
        ).withLocation('à la plage'),
        new FaceSnap(
          "Boisson de rêve", 
          "Le plein de vitamines", 
          "https://img3.wallspic.com/crops/0/8/6/4/7/174680/174680-continuation-eau-vaisselle-neige-verrerie-3840x2160.jpg", 
          new Date(), 
          100
        ),
        new FaceSnap(
          "Des vacances parfaites", 
          "On se sent bien", 
          "https://images.goelia.com/sigo/images/menu/VP_28.jpg?v=15", 
          new Date(), 
          255
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    snapFaceSnapById(faceSnapId: string, snapType: SnapType) : void {
      const faceSnapFound = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnapFound) {
        throw Error(`FaceSnap ${faceSnapId} not found!`);
      }

      faceSnapFound.snap(snapType);
    }
}