import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { NgOptimizedImage } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FooterComponent } from '../footer/footer.component';
import { outils } from '../projet';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


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
  svg = signal('')
  techno = computed(()=>{
    return this.outils().filter((item)=> item.type == 'techno')
  })
  methode = computed(()=>{
    return this.outils().filter((item)=> item.type == 'ux')
  })

  modeDark(val :string){
    this.mode.set(val)
  }
  
  competences = [
    {
      title: 'Compétences Techniques',
      items: [
        { label: 'Recherche UX', value: 70 },
        { label: 'Idéation', value: 70 },
        { label: 'Mockups', value: 90 },
        { label: 'Prototypage', value: 90 },
        { label: 'Wireframing', value: 88 },
      ],
    },
    {
      title: 'Compétences Interpersonnelles',
      items: [
        { label: 'Empathie', value: 80 },
        { label: 'Communication', value: 70 },
        { label: "Esprit d'équipe", value: 85 },
        { label: 'Flexibilité', value: 70 },
        { label: 'Collaboration', value: 80 },
      ],
    },
    {
      title: 'Langues & Outils',
      items: [
        { label: 'Français', value: 85 },
        { label: 'Anglais (Lu)', value: 60 },
        { label: 'Figma', value: 90 },
        { label: 'Jira', value: 50 },
        { label: 'Illustrator', value: 75 },
      ],
    },
  ];

  bgStyle: SafeStyle;
  
  constructor(private sanitizer: DomSanitizer){
    const rawSvg = `<svg width="1280" height="539" viewBox="0 0 1280 539" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="1280" y2="0.5" stroke="#7E452B" stroke-opacity="0.05"/>
<line y1="108.1" x2="1280" y2="108.1" stroke="#7E452B" stroke-opacity="0.05"/>
<line y1="215.7" x2="1280" y2="215.7" stroke="#7E452B" stroke-opacity="0.05"/>
<line y1="323.3" x2="1280" y2="323.3" stroke="#7E452B" stroke-opacity="0.05"/>
<line y1="430.9" x2="1280" y2="430.9" stroke="#7E452B" stroke-opacity="0.05"/>
<line y1="538.5" x2="1280" y2="538.5" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="475.5" y1="1" x2="475.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="396.9" y1="1" x2="396.9" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="318.3" y1="1" x2="318.3" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="239.7" y1="1" x2="239.7" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="161.1" y1="1" x2="161.1" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="82.5" y1="1" x2="82.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="868.5" y1="1" x2="868.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="789.9" y1="1" x2="789.9" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="711.3" y1="1" x2="711.3" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="632.7" y1="1" x2="632.7" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="554.1" y1="1" x2="554.1" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="475.5" y1="1" x2="475.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="1261.5" y1="1" x2="1261.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="1182.9" y1="1" x2="1182.9" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="1104.3" y1="1" x2="1104.3" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="1025.7" y1="1" x2="1025.7" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="947.1" y1="1" x2="947.1" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<line x1="868.5" y1="1" x2="868.5" y2="394" stroke="#7E452B" stroke-opacity="0.05"/>
<foreignObject x="147" y="-20" width="1070" height="572"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(17.5px);clip-path:url(#bgblur_0_41_118_clip_path);height:100%;width:100%"></div></foreignObject><ellipse data-figma-bg-blur-radius="35" cx="682" cy="266" rx="500" ry="251" [class.bg-[#2B2F38]]="mode() != 'claire'" fill="#FCFBFC"/>
<defs>
<clipPath id="bgblur_0_41_118_clip_path" transform="translate(-147 20)"><ellipse cx="682" cy="266" rx="500" ry="251"/>
</clipPath></defs>
</svg>`
    const encoded = encodeURIComponent(rawSvg);
  const dataUrl = `url("data:image/svg+xml;utf8,${encoded}")`;
  this.bgStyle = this.sanitizer.bypassSecurityTrustStyle(dataUrl);

  console.log(dataUrl)
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
