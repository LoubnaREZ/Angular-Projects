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
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZGCQ9jac_mKUSNpIZcWJEQFnZpgvgzi_SA&s", 
          new Date(), 
          0
        ).withLocation('à la plage'),
        new FaceSnap(
          "Boisson de rêve", 
          "Le plein de vitamines", 
          "https://images.anaca3.com/wp-content/uploads/2018/05/combien-de-calories-dans-un-jus-de-fruits-de-la-passion-702x336.jpg", 
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