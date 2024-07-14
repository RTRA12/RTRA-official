import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterSectionComponent } from './components/footer-section/footer-section.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent, FooterSectionComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'RADR';

}
