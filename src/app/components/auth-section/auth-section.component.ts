import { Component, ElementRef } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-auth-section',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './auth-section.component.html',
    styleUrl: './auth-section.component.css',
})
export class AuthSectionComponent {
    signInTab: HTMLElement | null = null;
    signUpTab: HTMLElement | null = null;
    signInContent: HTMLElement | null = null;
    signUpContent: HTMLElement | null = null;
    signInActive: boolean = true;

    signInForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    signUpForm: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
    });

    constructor(private document: ElementRef) {}

    ngOnInit() {
        this.signInTab = this.document.nativeElement.querySelector('#signIn');
        this.signUpTab = this.document.nativeElement.querySelector('#signUp');
        this.signInContent = this.document.nativeElement.querySelector('.signInForm');
        this.signUpContent = this.document.nativeElement.querySelector('.signUpForm');
        this.signInTab?.addEventListener('click', () => {
            if(this.signInActive) {
                return;
            }
            this.signInActive = true;
            this.signInTab?.classList.add('activeTab');
            this.signInContent?.classList.add('active');
            if(this.signUpTab?.classList.contains('activeTab')) {
                this.signUpTab.classList.remove('activeTab');
                this.signUpContent?.classList.remove('active');
            }
        });
        this.signUpTab?.addEventListener('click', () => {
            if(!this.signInActive) {
                return;
            }
            this.signInActive = false;
            this.signUpTab?.classList.add('activeTab');
            this.signUpContent?.classList.add('active');
            if(this.signInTab?.classList.contains('activeTab')) {
                this.signInTab?.classList.remove('activeTab');
                this.signInContent?.classList.remove('active');
            }
        });
    }
}
