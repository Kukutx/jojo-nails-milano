import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

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

  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
