import { Component, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    isManueOpened: Boolean = false;
    theme: String = 'dark';

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
        let themeIcon: HTMLElement = this.document.nativeElement.querySelector('i');
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

