import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBackgroudComponent } from "../home-backgroud/home-backgroud.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, HomeBackgroudComponent],  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/';
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }
}




  // constructor(private renderer: Renderer2) {}
  // ngAfterViewInit(): void {
  //   let i = 1;
  //   const stop = 4;
  //   setInterval(() => {
  //     if (i > stop) {
  //       return;
  //     }
  //     const element = document.getElementById(`len${i++}`);
  //     if (element) {
  //       this.renderer.addClass(element, 'bounce');
  //       setTimeout(() => this.renderer.removeClass(element, 'bounce'), 2000);
  //     }
  //   }, 500);
  // }