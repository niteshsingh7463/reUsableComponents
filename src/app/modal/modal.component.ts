import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  openModal = false;
  @ViewChild('myModal')
  myModal!: ElementRef;
constructor(){
}

@HostListener('window:click', ['$event'])
onWindowClick(event:any) {
  if(event.target==this.myModal.nativeElement){
    this.openModal=false;
  }
}
}
