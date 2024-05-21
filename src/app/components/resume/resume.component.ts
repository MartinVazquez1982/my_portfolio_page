import { Component, OnInit  } from '@angular/core';
import * as data from '../../../data/resume.json';
import { ResumeData } from '../../../interfaces/interfaces';
import { repeat } from 'rxjs';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css', '../../../styles.css']
})

export class ResumeApp implements OnInit {

    items: ResumeData = data;


    ngOnInit(): void {

        const elements = document.getElementsByClassName('certification-list');
        if (elements.length > 0) {
            const element = elements[0] as HTMLElement;
            element.style.gridTemplateColumns=`repeat(${this.items.certifications.length},135px)`;
        }

        const imageList = document.querySelectorAll('.certification-slider .certification-list') as NodeListOf<HTMLElement>;
        const slideScrollbar = document.querySelector('.slider-scrollbar') as HTMLElement;
        const scrollbarThumb = slideScrollbar.querySelector('.scrollbar-thumb') as HTMLElement;
        const slideButtons = document.querySelectorAll('.button-certification')  as NodeListOf<HTMLElement>;
        const maxScrollLeft = imageList[0].scrollWidth - imageList[0].clientWidth;
        
        scrollbarThumb.addEventListener('mousedown', (e) => {
            const startX = e.clientX;
            const thumbPosition = scrollbarThumb.offsetLeft;

            const handleMouseMove = (e: MouseEvent) => {
                const deltaX = e.clientX - startX;
                const newThumbPosition = thumbPosition + deltaX;
                const maxThumbPosition = slideScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

                const boundedPosition = Math.max(0, Math.min(maxThumbPosition,newThumbPosition));
                const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                scrollbarThumb.style.left = `${boundedPosition}px`;
                imageList[0].scrollLeft = scrollPosition;
            }

            const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            }

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });

        slideButtons.forEach(button => {
            button.addEventListener('click', () =>{
                const direction = button.id === 'button-left'? -1 : 1;
                const scrollAmount = imageList[0].clientWidth * direction;
                imageList[0].scrollBy({left: scrollAmount, behavior: "smooth"});
            })
        });

        const updateScrollThumbPosition = () => {
            const scrollPosition = imageList[0].scrollLeft;
            const thumbPosition = (scrollPosition / maxScrollLeft) * (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
            scrollbarThumb.style.left = `${thumbPosition}px`;
        }

        imageList[0].addEventListener('scroll', () => {
            updateScrollThumbPosition();
        });
    }

}