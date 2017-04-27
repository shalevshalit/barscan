import {Component} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imageSrc = "http://placehold.it/750x450";

  constructor(private barcodeScanner:BarcodeScanner,
              private camera:Camera) {

  }

  startScan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
    }, (err) => {
      // An error occurred
    });
  }

  takePicture() {
    const options:CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imageSrc = base64Image;
    }, (err) => {
      // Handle error
    });
  }
}
