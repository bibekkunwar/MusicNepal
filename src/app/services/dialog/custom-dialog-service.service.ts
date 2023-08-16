import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Overlay } from '@angular/cdk/overlay';
import { ModalPopUpComponent } from 'src/app/layouts/modal-pop-up/modal-pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogServiceService {

  constructor(private dialog: MatDialog, private overlay: Overlay) {}

  openModal(component: any, config: MatDialogConfig) {
    config.scrollStrategy = this.overlay.scrollStrategies.block();
    this.dialog.open(ModalPopUpComponent, config);
  }
}
