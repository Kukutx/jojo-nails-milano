import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',   // 选择器，HTML 中可以这样使用: <div appHighlight></div>
  standalone: true
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // 使用 HostListener 监听鼠标悬停事件
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}




// 解释：
// @Directive：定义指令的装饰器。
// ElementRef：允许我们访问 DOM 元素。
// Renderer2：用来操作 DOM 元素的 API，推荐使用它来修改 DOM 元素，而不是直接操作 DOM，以便于支持服务器端渲染等。
// HostListener：用于监听 DOM 元素的事件（如 mouseenter 和 mouseleave），在这些事件触发时调用相应的函数。
// 指令：用于修改或增强 DOM 元素的行为，可以创建自定义的指令来执行特定的功能，比如样式变换、事件监听等。
// <div appHighlight>
//   Hover over me to change my background color!
// </div>