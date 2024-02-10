import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamMemberCardComponent} from "./team-member-card/team-member-card.component";
import {JobLevel, TeamMember} from "./model/models";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {ImageModule} from "primeng/image";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamMemberCardComponent, MenubarModule, ImageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  teamMember: TeamMember = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    jobTitle: "Software Engineer",
    jobLevel: JobLevel.SENIOR
  }
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {}
    ]
  }

}
