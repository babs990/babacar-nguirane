import { Component, signal } from '@angular/core';
import { NavComponent } from '../../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {

  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  
  modeDark(val :string){
    this.mode.set(val)
  }

}
