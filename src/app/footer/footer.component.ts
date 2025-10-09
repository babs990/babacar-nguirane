import { NgOptimizedImage } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink,NavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  source:string =''
  source2 : string =''
  mode = signal(localStorage.getItem('mode') || 'claire')
  ambiances = signal(localStorage.getItem('mode') || 'claire');
  @Input() 
  set ambiance(value: string) {
  this.ambiances.set(value);
  console.log('Ambiance mise à jour :', value);
}

get ambiance() {
  return this.ambiances();
}

  modeDark(val :string){
    this.mode.set(val)
  }

  Darkmode(){
    if(this.source == 'nocturne.svg'){
      this.mode.set('claire')
      this.source = 'sun.svg'
      this.source2 = 'sun2.svg'
      localStorage.setItem('src','sun.svg')
      localStorage.setItem('mode','claire')
    }
    else{
      this.mode.set('nuit')
      this.source = 'nocturne.svg'
      this.source2 = 'nocturne2.svg'
      localStorage.setItem('src','nocturne.svg')
      localStorage.setItem('mode','nuit')
    }

  }

}
