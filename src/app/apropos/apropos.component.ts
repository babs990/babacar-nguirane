import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterComponent } from '../footer/footer.component';
import { outils } from '../projet';


@Component({
  selector: 'app-apropos',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements AfterViewInit{

  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  skill = signal(localStorage.getItem('skill'))
  outils = signal(outils)
  techno = computed(()=>{
    return this.outils().filter((item)=> item.type == 'techno')
  })
  methode = computed(()=>{
    return this.outils().filter((item)=> item.type == 'ux')
  })

  modeDark(val :string){
    this.mode.set(val)
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('#img',{
      xPercent:-50,
      duration: 5,
      opacity:0,
      ease: 'bounce'
    })

    gsap.from('#text',{
      xPercent:50,
      duration: 3,
      opacity:0.2,
    })

    gsap.from('.img',{
      opacity : 0,
      duration : 3,
      scrollTrigger:{
        trigger : '.img',
        start : 'top 75%',
      }
    })

    gsap.from('.histoire',{
      translateY : 100,
      opacity : 0,
      duration : 3,
      scrollTrigger:{
        trigger : '.img',
        start : 'top 45%',
      }
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


  }
}
