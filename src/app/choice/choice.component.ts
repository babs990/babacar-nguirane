import { NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './choice.component.html',
  styleUrl: './choice.component.css'
})
export class ChoiceComponent implements AfterViewInit {

  skill = signal('ux')
  

  ngAfterViewInit(): void {
    localStorage.setItem('skill','ux')
    gsap.from('#babs',{
      translateY : -300,
      ease: 'expo',
      duration : 1
    })

    gsap.from('#bienvenue',{
      opacity : 0,
      duration : 1,
      delay : 0.5
    })

    gsap.from('#choix',{
      translateY : 100,
      duration : 1,
      opacity : 0,
      delay : 1.2
    })

    gsap.from('#boutonChoix',{
      duration : 1,
      opacity : 0,
      delay : 2
    })

  }
  devmode(){
    this.skill.set('dev')
    localStorage.setItem('skill','dev')
  }

  uxmode(){
    this.skill.set('ux')
    localStorage.setItem('skill','ux')
  }

}
