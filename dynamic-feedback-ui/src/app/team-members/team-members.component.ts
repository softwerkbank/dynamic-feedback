import {Component, Input} from '@angular/core';
import {TeamMember} from "../model/models";
import {TeamMemberCardComponent} from "../team-member-card/team-member-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [
    TeamMemberCardComponent,
    NgForOf
  ],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss'
})
export class TeamMembersComponent {
  @Input({ required: true }) teamMembers: TeamMember[] | undefined

}
