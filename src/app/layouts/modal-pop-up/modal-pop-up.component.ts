import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent {


  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



