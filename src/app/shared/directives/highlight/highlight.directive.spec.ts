import { ElementRef, Renderer2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const mockRenderer2 = {} as Renderer2;
    const directive = new HighlightDirective(mockElementRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });
});
