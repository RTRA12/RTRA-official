import { Component } from '@angular/core';
import { AuthSectionComponent } from '../../components/auth-section/auth-section.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [AuthSectionComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
