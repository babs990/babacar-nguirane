import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, input, OnInit, Output, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgOptimizedImage,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {

  element : any
  router = inject(Router)
  source:string =''
  source2 : string =''
  skill = signal(localStorage.getItem('skill'))
  ambiance = signal(localStorage.getItem('mode') || 'claire')

  @Input() src = 'sun.svg'
  @Output() mode: EventEmitter<string> = new EventEmitter()
  @Input() nav= ''

  Darkmode(){
    if(this.source == 'nocturne.svg'){
      this.mode.emit('claire')
      this.source = 'sun.svg'
      this.source2 = 'sun2.svg'
      localStorage.setItem('src','sun.svg')
      localStorage.setItem('mode','claire')
    }
    else{
      this.mode.emit('nuit')
      this.source = 'nocturne.svg'
      this.source2 = 'nocturne2.svg'
      localStorage.setItem('src','nocturne.svg')
      localStorage.setItem('mode','nuit')
    }

  }

  ngOnInit(): void {
    if(this.src == ''){
      this.source = 'sun.svg'
      this.source2 = 'sun2.svg'
    }
    else{
      this.source = this.src
      if(this.src == 'sun.svg'){
        this.source2 = 'sun.svg'
      }else{
        this.source2 = 'sun.svg'
      }
    }
  }


  constructor(el: ElementRef){
    this.element = el
  }

  basculerDev(){
    localStorage.setItem('skill','dev')
    this.skill.set(localStorage.getItem('skill'))
    window.location.reload()
  }

  basculerUx(){
    localStorage.setItem('skill','ux')
    this.skill.set(localStorage.getItem('skill'))
    window.location.reload()
  }

  apropos(){
    this.router.navigateByUrl('/apropos')
  }

  revealApropos(){
    if(this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.contains('translate-x-[60px]')){
      this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.remove('translate-x-[60px]')
    }
  }

  hideApropos(){
    if(!this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.contains('translate-x-[60px]')){
      this.element.nativeElement.querySelector('#apropos').querySelector('.item').classList.add('translate-x-[60px]')
    }
  }

  revealProjets(){
    this.element.nativeElement.querySelector('#projets').querySelector('.item').classList.remove('translate-x-[60px]')
  }

  hideProjets(){
    this.element.nativeElement.querySelector('#projets').querySelector('.item').classList.add('translate-x-[60px]')
  }

  revealArticles(){
    this.element.nativeElement.querySelector('#articles').querySelector('.item').classList.remove('translate-x-[60px]')
  }

  hideArticles(){
    this.element.nativeElement.querySelector('#articles').querySelector('.item').classList.add('translate-x-[60px]')
  }

  droplist(){
    if(this.element.nativeElement.querySelector('#drop').classList.contains('translate-x-full')){
      this.element.nativeElement.querySelector('#drop').classList.remove('translate-x-full')
      this.element.nativeElement.querySelector('#drop').classList.remove('opacity-0')
      this.element.nativeElement.querySelector('#drop').classList.add('flex')
      this.element.nativeElement.querySelector('#dropList').classList.remove('translate-x-full')

    }else{
      this.element.nativeElement.querySelector('#drop').classList.add('translate-x-full')
      this.element.nativeElement.querySelector('#dropList').classList.add('translate-x-full')
    }
  }
}
