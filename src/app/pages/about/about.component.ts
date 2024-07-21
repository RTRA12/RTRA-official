import { Component, Input } from '@angular/core';
import { MemberCardComponent } from "../../components/member-card/member-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MemberCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
