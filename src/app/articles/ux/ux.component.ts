import { Component, signal } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NavComponent } from '../../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-ux',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent],
  templateUrl: './ux.component.html',
  styleUrl: './ux.component.css'
})
export class UxComponent {
  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  
  modeDark(val :string){
    this.mode.set(val)
  }

}
