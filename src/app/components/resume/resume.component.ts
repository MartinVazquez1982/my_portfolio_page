import { Component, AfterViewInit, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import * as data from '../../../data/resume.json';
import { ResumeData } from '../../../interfaces/interfaces';
import { repeat } from 'rxjs';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css', '../../../styles.css']
})

export class ResumeApp implements AfterViewInit{

    @ViewChild('sliderContainer', { read: ElementRef }) sliderContainer!: ElementRef;
    @ViewChild('resumeContainer', { read: ElementRef }) resumeContainer!: ElementRef;
    items: ResumeData = data;
    sizeItemCertification: number = 170;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.onResize();
      }

    scrollLeft(): void {
        this.smoothScroll(this.sliderContainer.nativeElement, -this.sizeItemCertification, 300);
    }
    
    scrollRight(): void {
        this.smoothScroll(this.sliderContainer.nativeElement, this.sizeItemCertification, 300);
    }
    
    smoothScroll(element: HTMLElement, change: number, duration: number): void {
        const start = element.scrollLeft;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = () => {
            currentTime += increment;
            const val = this.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if (currentTime < duration) {
                window.requestAnimationFrame(animateScroll);
            }
        };
    
        animateScroll();
    }
    
    easeInOutQuad(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event?: Event): void {
        const windowWidth = this.resumeContainer.nativeElement.offsetWidth - 200;
        let cantItem = Math.floor(windowWidth / this.sizeItemCertification);
        if (cantItem === 0){
            cantItem = 1;
        }
        const sizeSlider = (cantItem * this.sizeItemCertification) + 'px';
        this.renderer.setStyle(this.sliderContainer.nativeElement, 'width', sizeSlider);
    }

}