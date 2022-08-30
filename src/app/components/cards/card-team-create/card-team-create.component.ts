import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { DistrictService } from 'src/app/services/district.service';
import { TeamService } from 'src/app/services/team.service';
import { SocketService } from 'src/app/socketio/socket.service';
import { Category } from 'src/app/types/category';
import { District } from 'src/app/types/district';
import { Team } from 'src/app/types/team';

@Component({
  selector: 'app-card-team-create',
  templateUrl: './card-team-create.component.html',
  styleUrls: ['./card-team-create.component.scss']
})
export class CardTeamCreateComponent implements OnInit {

  public team?: Team;
  public form!: UntypedFormGroup;
  public categories: Category[] = [];
  public districts: District[] = [];

  constructor(private readonly teamService: TeamService, private readonly categoryService: CategoryService, private readonly districtService: DistrictService, private readonly socketService: SocketService) { 
    this.setupForm();
    this.teamService.teamFormAsObservable().subscribe(
      (team) => {
        this.team = team;
        this.setupForm();
      }
    );
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
      }
    );

    this.districtService.getDistricts().subscribe(
      (districts) => {
        this.districts = districts;
      }
    );
  }

  public setupForm(){
    this.form = new UntypedFormGroup({
      name: new UntypedFormControl(this.team?.name, [Validators.required]),
      category: new UntypedFormControl(this.team?.category?.id, [Validators.required]),
      district: new UntypedFormControl(this.team?.district?.id, [Validators.required])
    });
  }

  public create(){
    if(this.form.valid){
      let form = this.form.value;
      this.teamService.createTeam(form).subscribe(
        (team) => {
          this.close();
        }
      );
    }
  }

  public close(){
    this.team = undefined;
  }

}
