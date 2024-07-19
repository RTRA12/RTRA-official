import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Navigation{
  title:string,
  link:string
}

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [CommonModule,RouterLink],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    isManueOpened: Boolean = false;
    theme: String = 'dark';
    navigations : Array<Navigation>= [
      {title:'About',link:'/about'},
      {title:'Events',link:'/events'},
      {title:'Contact',link:'/contact'}
    ];
    constructor(private document: ElementRef) {
    }

    changeTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        if(this.theme === 'dark') {
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
        }
    }

    ngOnInit() {
        let themeIcon: HTMLElement = this.document.nativeElement.querySelector('#theme-changer');
        themeIcon.addEventListener('click', () => {
            this.changeTheme();
            if(this.theme === 'dark') {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });
    }
}

