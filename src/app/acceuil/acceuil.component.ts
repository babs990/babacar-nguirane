import { AfterViewInit, Component, computed, inject, OnInit, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projets, projetUx } from '../projet';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { outils } from '../projet';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent,RouterLink],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements AfterViewInit,OnInit{

  readonly router = inject(Router)
  readonly projets = signal(projets)
  readonly design = signal(projetUx)
  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'claire')
  skill = signal(localStorage.getItem('skill'))
  outils = signal(outils)
  svg = signal('')
  imageBabs=''
  techno = computed(()=>{
    return this.outils().filter((item)=> item.type == 'techno')
  })
  methode = computed(()=>{
    return this.outils().filter((item)=> item.type == 'ux')
  })
  Ui = computed(()=>{
    return this.design().filter((item) => item.numb <=3)
  })



  projets3 = computed(()=>{
    return this.projets().filter((item) => item.numb <=3)
  }) 

  modeDark(val :string){
    this.mode.set(val)
    this.updateBackground(); // régénère le SVG avec la bonne couleur
  }
  
  bgStyle = signal<SafeStyle>('' as SafeStyle);
  
  constructor(private sanitizer: DomSanitizer) {
    this.updateBackground();
  }

  updateBackground() {
    const fillColor = this.mode() === 'claire' ? '#FCFBFC' : '#2B2F38';

    const svg = `
<svg
  width="1280"
  height="539"
  viewBox="0 0 1280 539"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g stroke="#7E452B" stroke-opacity="0.05">
    <line y1="0.5" x2="1280" y2="0.5" />
    <line y1="108.1" x2="1280" y2="108.1" />
    <line y1="215.7" x2="1280" y2="215.7" />
    <line y1="323.3" x2="1280" y2="323.3" />
    <line y1="430.9" x2="1280" y2="430.9" />
    <line y1="538.5" x2="1280" y2="538.5" />
    <line x1="82.5" y1="1" x2="82.5" y2="394" />
    <line x1="161.1" y1="1" x2="161.1" y2="394" />
    <line x1="239.7" y1="1" x2="239.7" y2="394" />
    <line x1="318.3" y1="1" x2="318.3" y2="394" />
    <line x1="396.9" y1="1" x2="396.9" y2="394" />
    <line x1="475.5" y1="1" x2="475.5" y2="394" />
    <line x1="554.1" y1="1" x2="554.1" y2="394" />
    <line x1="632.7" y1="1" x2="632.7" y2="394" />
    <line x1="711.3" y1="1" x2="711.3" y2="394" />
    <line x1="789.9" y1="1" x2="789.9" y2="394" />
    <line x1="868.5" y1="1" x2="868.5" y2="394" />
    <line x1="947.1" y1="1" x2="947.1" y2="394" />
    <line x1="1025.7" y1="1" x2="1025.7" y2="394" />
    <line x1="1104.3" y1="1" x2="1104.3" y2="394" />
    <line x1="1182.9" y1="1" x2="1182.9" y2="394" />
    <line x1="1261.5" y1="1" x2="1261.5" y2="394" />
  </g>

  <ellipse cx="682" cy="266" rx="500" ry="251" fill="${fillColor}" />
</svg>
    `;

    const encoded = encodeURIComponent(svg);
    const dataUrl = `url("data:image/svg+xml;utf8,${encoded}")`;

    this.bgStyle.set(this.sanitizer.bypassSecurityTrustStyle(dataUrl));
  }

  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.salut', {
      translateY : -7,
      duration : 1.5,
      delay: 0.3,
      stagger: 0.2
    })

    gsap.to('.passion',{
      translateY : 0,
      duration : 1.5,
      delay: 0.5,
      stagger: 0.2
    })

    gsap.from('.babs',{
      scale:0.6,
      duration: 5,
      opacity:0,
      ease: 'bounce'
    })

    gsap.from('.outils',{
      translateY : 100,
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.outils',
        start : 'top 85%',
      }
    })

    gsap.from('.projets',{
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.projets',
        start : 'top 90%',
      }
    })

    gsap.from('.carteProjets',{
      translateY : 100,
      opacity : 0,
      duration : 1.5,
      scrollTrigger:{
        trigger : '.projets',
        start : 'top 65%',
      }
    })

    gsap.from('.imgArticle',{
      translateX : -100,
      opacity : 0,
      duration : 2,
      ease: 'bounce',
      scrollTrigger:{
        trigger : '.article',
        start : 'top 95%',
      }
    })

    gsap.from('.descArticle',{
      translateX : 100,
      duration : 2,
      scrollTrigger:{
        trigger : '.article',
        start : 'top 95%',
      }
    })
  }

  contact(){
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}
