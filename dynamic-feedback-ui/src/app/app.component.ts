import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamMemberCardComponent} from "./team-member-card/team-member-card.component";
import {JobLevel, TeamMember} from "./model/models";
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {ImageModule} from "primeng/image";
import {TeamMembersComponent} from "./team-members/team-members.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamMemberCardComponent, MenubarModule, ImageModule, TeamMembersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  teamMembers: TeamMember[] = [
    { id: 1, firstName: "John", lastName: "Doe", jobTitle: "Software Engineer", jobLevel: JobLevel.SENIOR, progress: 37},
    { id: 2, firstName: "Jane", lastName: "Smith", jobTitle: "DevOps Engineer", jobLevel: JobLevel.PROFESSIONAL, progress: 65},
    { id: 3, firstName: "Sam", lastName: "Johnson", jobTitle: "Test Engineer", jobLevel: JobLevel.SENIOR, progress: 12},
    { id: 4, firstName: "Lisa", lastName: "Brown", jobTitle: "Software Engineer", jobLevel: JobLevel.JUNIOR, progress: 73}
  ];
  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {}
    ]
  }

}
