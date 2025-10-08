import { AfterViewInit, Component, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [NavComponent,NgOptimizedImage,FooterComponent,RouterLink],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements AfterViewInit {

  skill = signal(localStorage.getItem('skill'))
  src = localStorage.getItem('src') || ''
  mode = signal(localStorage.getItem('mode') || 'nuit')
  
  modeDark(val :string){
    this.mode.set(val)
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.articles', {
      opacity :0,
      duration : 3,
      delay: 0.3,
    })
  
    gsap.from('.description', {
      translateY : 50,
      opacity :0,
      duration : 2,
      delay: 0.3,
    })
  
    gsap.from('.descArticle',{
      translateX : 100,
      duration : 2,
      scrollTrigger:{
        trigger : '.article',
        start : 'top 95%',
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

  }
}
