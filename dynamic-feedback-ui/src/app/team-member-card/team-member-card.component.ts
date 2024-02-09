import {Component, Input} from '@angular/core';
import {TeamMember} from "../model/models";
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-team-member-card',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
  @Input({ required: true }) content: TeamMember | undefined;
}
