import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { StockRolesService } from '../../services/stock-roles/stock-roles.service';
import { UserService } from '../../services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icap-b-form',
  templateUrl: './icap-b-form.component.html',
  styleUrls: ['./icap-b-form.component.scss'],
})
export class ICAPBFormComponent implements OnInit {

  private icapBForm: FormGroup;
  radio_selected

  autismoBool = false
  visualBool = false
  auditivaBool = false
  sordo_cegueraBool = false
  paralisis_cerebralBool = false
  trastorno_intelectualBool = false
  lesion_cerebralBool = false
  farmacodependenciaBool = false
  salud_fisicaBool = false
  enfermedad_mentalBool = false
  salud_mentalBool = false
  epilepsiaBool = false
  otroBool = false

  constructor(private route: Router, private formBuilder: FormBuilder, private stockRolesService: StockRolesService, private userService: UserService) {
    this.icapBForm = this.formBuilder.group({
      //Checkboxes
      
      noCB: [false],
      autismoCB: [false],
      visualCB: [false],
      auditivaCB: [false],
      sordo_cegueraCB: [false],
      paralisis_cerebralCB: [false],
      trastorno_intelectualCB: [false],
      lesion_cerebralCB: [false],
      farmacodependenciaCB: [false],
      salud_fisicaCB: [false],
      enfermedad_mentalCB: [false],
      salud_mentalCB: [false],
      epilepsiaCB: [false],
      otroCB: [false],
      /*Entries*/
      autismo: [''],
      visual: [''],
      auditiva: [''],
      sordo_ceguera: [''],
      paralisis_cerebral: [''],
      trastorno_intelectual: [''],
      lesion_cerebral: [''],
      farmacodependencia: [''],
      salud_fisica: [''],
      enfermedad_mental: [''],
      salud_mental: [''],
      epilepsia: [''],
      otro: [''],
      comment: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]]
    });
  }

  ngOnInit() { 
    this.noCB.valueChanges.subscribe(checked => {
      if (checked) {
        this.autismoCB.disable()
        this.visualCB.disable()
        this.auditivaCB.disable()
        this.sordo_cegueraCB.disable()
        this.paralisis_cerebralCB.disable()
        this.trastorno_intelectualCB.disable()
        this.lesion_cerebralCB.disable()
        this.farmacodependenciaCB.disable()
        this.salud_fisicaCB.disable()
        this.enfermedad_mentalCB.disable()
        this.salud_mentalCB.disable()
        this.epilepsiaCB.disable()
        this.otroCB.disable()
      } else {
        this.autismoCB.enable()
        this.visualCB.enable()
        this.auditivaCB.enable()
        this.sordo_cegueraCB.enable()
        this.paralisis_cerebralCB.enable()
        this.trastorno_intelectualCB.enable()
        this.lesion_cerebralCB.enable()
        this.farmacodependenciaCB.enable()
        this.salud_fisicaCB.enable()
        this.enfermedad_mentalCB.enable()
        this.salud_mentalCB.enable()
        this.epilepsiaCB.enable()
        this.otroCB.enable()
      }
        this.autismoCB.updateValueAndValidity()
        this.visualCB.updateValueAndValidity()
        this.auditivaCB.updateValueAndValidity()
        this.sordo_cegueraCB.updateValueAndValidity()
        this.paralisis_cerebralCB.updateValueAndValidity()
        this.trastorno_intelectualCB.updateValueAndValidity()
        this.lesion_cerebralCB.updateValueAndValidity()
        this.farmacodependenciaCB.updateValueAndValidity()
        this.salud_fisicaCB.updateValueAndValidity()
        this.enfermedad_mentalCB.updateValueAndValidity()
        this.salud_mentalCB.updateValueAndValidity()
        this.epilepsiaCB.updateValueAndValidity()
        this.otroCB.updateValueAndValidity()
    });

    this.autismoCB.valueChanges.subscribe(checked => {
      this.autismoBool = checked
      if (checked) {
        this.autismo.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.autismo.setValidators(null);
        this.autismo.setValue("")
      }
      this.autismo.updateValueAndValidity();
    });

    this.visualCB.valueChanges.subscribe(checked => {
      this.visualBool = checked
      if (checked) {
        this.visual.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.visual.setValidators(null);
        this.visual.setValue("")
      }
      this.visual.updateValueAndValidity();
    });

    this.auditivaCB.valueChanges.subscribe(checked => {
      this.auditivaBool = checked
      if (checked) {
        this.auditiva.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.auditiva.setValidators(null);
        this.auditiva.setValue("")
      }
      this.auditiva.updateValueAndValidity();
    });

    this.sordo_cegueraCB.valueChanges.subscribe(checked => {
      this.sordo_cegueraBool = checked
      if (checked) {
        this.sordo_ceguera.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.sordo_ceguera.setValidators(null);
        this.sordo_ceguera.setValue("")
      }
      this.sordo_ceguera.updateValueAndValidity();
    });

    this.paralisis_cerebralCB.valueChanges.subscribe(checked => {
      this.paralisis_cerebralBool = checked
      if (checked) {
        this.paralisis_cerebral.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.paralisis_cerebral.setValidators(null);
        this.paralisis_cerebral.setValue("")
      }
      this.paralisis_cerebral.updateValueAndValidity();
    });

    this.trastorno_intelectualCB.valueChanges.subscribe(checked => {
      this.trastorno_intelectualBool = checked
      if (checked) {
        this.trastorno_intelectual.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.trastorno_intelectual.setValidators(null);
        this.trastorno_intelectual.setValue("")
      }
      this.trastorno_intelectual.updateValueAndValidity();
    });

    this.lesion_cerebralCB.valueChanges.subscribe(checked => {
      this.lesion_cerebralBool = checked
      if (checked) {
        this.lesion_cerebral.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.lesion_cerebral.setValidators(null);
        this.lesion_cerebral.setValue("")
      }
      this.lesion_cerebral.updateValueAndValidity();
    });

    this.farmacodependenciaCB.valueChanges.subscribe(checked => {
      this.farmacodependenciaBool = checked
      if (checked) {
        this.farmacodependencia.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.farmacodependencia.setValidators(null);
        this.farmacodependencia.setValue("")
      }
      this.farmacodependencia.updateValueAndValidity();
    });

    this.salud_fisicaCB.valueChanges.subscribe(checked => {
      this.salud_fisicaBool = checked
      if (checked) {
        this.salud_fisica.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.salud_fisica.setValidators(null);
        this.salud_fisica.setValue("")
      }
      this.salud_fisica.updateValueAndValidity();
    });

    this.enfermedad_mentalCB.valueChanges.subscribe(checked => {
      this.enfermedad_mentalBool = checked
      if (checked) {
        this.enfermedad_mental.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.enfermedad_mental.setValidators(null);
        this.enfermedad_mental.setValue("")
      }
      this.enfermedad_mental.updateValueAndValidity();
    });

    this.salud_mentalCB.valueChanges.subscribe(checked => {
      this.salud_mentalBool = checked
      if (checked) {
        this.salud_mental.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.salud_mental.setValidators(null);
        this.salud_mental.setValue("")
      }
      this.salud_mental.updateValueAndValidity();
    });

    this.epilepsiaCB.valueChanges.subscribe(checked => {
      this.epilepsiaBool = checked
      if (checked) {
        this.epilepsia.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.epilepsia.setValidators(null);
        this.epilepsia.setValue("")
      }
      this.epilepsia.updateValueAndValidity();
    });

    this.otroCB.valueChanges.subscribe(checked => {
      this.otroBool = checked;
      if (checked) {
        this.otro.setValidators([Validators.pattern('^[a-zA-Z ]*$'), Validators.required]);
      } else {
        this.otro.setValidators(null);
        this.otro.setValue("")
      }
      this.otro.updateValueAndValidity();
    });

  }

  /*
  autismo: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  visual: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  auditiva: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  sordo_ceguera: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  paralisis_cerebral: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  trastorno_intelectual: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  lesion_cerebral: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  farmacodependencia: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  salud_fisica: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  enfermedad_mental: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  salud_mental: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  epilepsia: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]],
  otro: ['', [Validators.pattern('^[a-zA-Z ]*$'), Validators.required]]

  this.optionB.valueChanges.subscribe(checked => {
    if (checked) {
      this.optionBExtra.setValidators([Validators.required, Validators.minLength(5)]);
    } else {
      this.optionBExtra.setValidators(null);
      this.optionBExtra.setValue("")
    }
    this.optionBExtra.updateValueAndValidity();
  });*/

  //Entries
  get form() { return this.icapBForm.controls; }
  get autismo() { return this.icapBForm.get("autismo") as FormControl; }
  get visual() { return this.icapBForm.get("visual") as FormControl; }
  get auditiva() { return this.icapBForm.get("auditiva") as FormControl; }
  get sordo_ceguera() { return this.icapBForm.get("sordo_ceguera") as FormControl; }
  get paralisis_cerebral() { return this.icapBForm.get("paralisis_cerebral") as FormControl; }
  get trastorno_intelectual() { return this.icapBForm.get("trastorno_intelectual") as FormControl; }
  get lesion_cerebral() { return this.icapBForm.get("lesion_cerebral") as FormControl; }
  get farmacodependencia() { return this.icapBForm.get("farmacodependencia") as FormControl; }
  get salud_fisica() { return this.icapBForm.get("salud_fisica") as FormControl; }
  get enfermedad_mental() { return this.icapBForm.get("enfermedad_mental") as FormControl; }
  get salud_mental() { return this.icapBForm.get("salud_mental") as FormControl; }
  get epilepsia() { return this.icapBForm.get("epilepsia") as FormControl; }
  get otro() { return this.icapBForm.get("otro") as FormControl; }

  //Checkboxes
  get noCB() { return this.icapBForm.get("noCB") as FormControl; }
  get autismoCB() { return this.icapBForm.get("autismoCB") as FormControl; }
  get visualCB() { return this.icapBForm.get("visualCB") as FormControl; }
  get auditivaCB() { return this.icapBForm.get("auditivaCB") as FormControl; }
  get sordo_cegueraCB() { return this.icapBForm.get("sordo_cegueraCB") as FormControl; }
  get paralisis_cerebralCB() { return this.icapBForm.get("paralisis_cerebralCB") as FormControl; }
  get trastorno_intelectualCB() { return this.icapBForm.get("trastorno_intelectualCB") as FormControl; }
  get lesion_cerebralCB() { return this.icapBForm.get("lesion_cerebralCB") as FormControl; }
  get farmacodependenciaCB() { return this.icapBForm.get("farmacodependenciaCB") as FormControl; }
  get salud_fisicaCB() { return this.icapBForm.get("salud_fisicaCB") as FormControl; }
  get enfermedad_mentalCB() { return this.icapBForm.get("enfermedad_mentalCB") as FormControl; }
  get salud_mentalCB() { return this.icapBForm.get("salud_mentalCB") as FormControl; }
  get epilepsiaCB() { return this.icapBForm.get("epilepsiaCB") as FormControl; }
  get otroCB() { return this.icapBForm.get("otroCB") as FormControl; }

  onItemChange(value){
    console.log(value.detail.value)
    this.radio_selected = value.detail.value
  }

  createICAPB = () => {
    let userData = this.icapBForm.getRawValue()
    userData["diagnostico"] = this.radio_selected;

    console.log(userData)
    
    /*this.userService.create(userData).subscribe((res: any) => {
      console.log(res)
    })*/
  }

  getUserInformation = (id) => {
    this.userService.getNames({ id: id }).subscribe((res: any) => {
      let { name, first_last_name, second_last_name } = res
      this.icapBForm.patchValue({name: name, first_last_name: first_last_name, second_last_name: second_last_name})
    })
  }

  navigateToOtherPage = (ruta) => {
    this.createICAPB()
    this.route.navigate([ruta])
  }
}
