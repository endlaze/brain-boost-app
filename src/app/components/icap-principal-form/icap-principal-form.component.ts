import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StockRolesService } from '../../services/stock-roles/stock-roles.service';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icap-principal-form',
  templateUrl: './icap-principal-form.component.html',
  styleUrls: ['./icap-principal-form.component.scss'],
})
export class ICAPPrincipalFormComponent implements OnInit {

  public icapPrincipalForm: FormGroup;
  customMonthNames = "Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Set, Oct, Nov, Dic"
  datePickerOptions: any;
  birthDate;
  evaluationDate;
  selectedDate;
  count = 0;

  constructor(private route: Router, private formBuilder: FormBuilder, private stockRolesService: StockRolesService, private userService: UserService) {
    this.icapPrincipalForm = this.formBuilder.group({
      /*Personal*/
      personal_id: ['', [Validators.pattern('^[0-9]*$'), Validators.required]],
      personal_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      personal_first_last_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      personal_second_last_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      personal_address1: ['', [Validators.required]],
      personal_address2: ['', [Validators.required]],
      personal_address3: ['', [Validators.required]],
      personal_address4: ['', [Validators.required]],
      personal_phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]],
      personal_celphone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]],
      /*Evaluation*/
      evaluation_institute: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      evaluation_evualator: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      evaluation_phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]],
      evaluation_celphone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]],
      /*Relative*/
      relative_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      relative_first_last_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      relative_second_last_name: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
      relative_phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]],
      relative_celphone_number: ['', [Validators.required, Validators.pattern('^[0-9]{8,8}'), Validators.minLength(8), Validators.minLength(8)]]
    });

    this.datePickerOptions = { buttons: [{ text: 'Guardar' }] }
  }

  ngOnInit() { }

  get form() { return this.icapPrincipalForm.controls; }

  incCount() {
    this.count++;
  }

  onEvaluationDateChange(date) {
    this.evaluationDate = date.detail.value
    this.incCount();
  }

  onBirthDateChange(date) {
    this.birthDate = date.detail.value
    this.incCount();
  }

  createICAPForm():boolean{
    let userData = this.icapPrincipalForm.getRawValue()

    userData['birthday'] = this.birthDate
    userData['evaluationDay'] = this.evaluationDate

    console.log(userData)
    console.log(this.count);

    if (this.count >= 21) { return true }
    else { return false }
  }

  getUserInformation = (id) => {
    this.userService.getNames({ id: id }).subscribe((res: any) => {
      let { name, first_last_name, second_last_name } = res
      this.icapPrincipalForm.patchValue({name: name, first_last_name: first_last_name, second_last_name: second_last_name})
    })
  }

  navigateToOtherPage = (ruta) => {
    if (this.createICAPForm()) { this.route.navigate([ruta]); }
  }
  
}

