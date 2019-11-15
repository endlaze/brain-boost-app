import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormAService } from '../../services/form-a-service/form-a.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-icap-a-form',
  templateUrl: './icap-a-form.component.html',
  styleUrls: ['./icap-a-form.component.scss'],
})
export class ICAPAFormComponent implements OnInit {
  private icapAForm: FormGroup;

  gender_selected
  idiom_selected
  expression_selected
  status_selected
  status_c_selected

  constructor(private route: Router, private formBuilder: FormBuilder, private formAService: FormAService) {
    this.icapAForm = this.formBuilder.group({
      estatura: [''],
      peso: [''],
      otroIdioma: [''],
      otroExpresion: [''],
      otroEstado: [''],
      comentario: ['']
    });
  }

  ngOnInit() {
  }

  onGenderChange(value){
    console.log(value.detail.value)
    this.gender_selected = value.detail.value
  }

  onIdiomChange(value){
    console.log(value.detail.value)
    this.idiom_selected = value.detail.value
  }

  onExpressionChange(value){
    console.log(value.detail.value)
    this.expression_selected = value.detail.value
  }

  onEstadoChange(value){
    console.log(value.detail.value)
    this.status_selected = value.detail.value
  }

  onEstadoCChange(value){
    console.log(value.detail.value)
    this.status_c_selected = value.detail.value
  }

  createICAPA = () => {
    let data = this.icapAForm.getRawValue()
    data["gender"] = this.gender_selected;
    data["idiom"] = this.idiom_selected;
    data["expression"] = this.expression_selected;  
    data["civil_status"] = this.status_selected;  
    data["legal_status"] = this.status_c_selected;

    let formData = []
    formData["idUser"] = 305060162;
    formData["json"] = data;

    console.log(formData)

    /*this.formAService.create(formData).subscribe((res: any) => {
      console.log()
    })*/
    
    /*this.userService.create(userData).subscribe((res: any) => {
      console.log(res)
    })*/
  }

  navigateToOtherPage = (ruta) => {
    this.createICAPA();
    this.route.navigate([ruta]);
  }

}
