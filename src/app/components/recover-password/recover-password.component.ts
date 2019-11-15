import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from '../../services/user-service/user.service'
import { doesNotThrow } from 'assert';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss'],
})
export class RecoverPasswordComponent implements OnInit {
  id
  private code
  private email
  private user

  constructor(public modalController: ModalController, private userService: UserService, 
              public alertController: AlertController) { }

  ngOnInit() {}

  async succesAlert(email) {
    let alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Se ha enviado un correo electronico a ' + email,
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async succesAlertF() {
    let alert = await this.alertController.create({
      header: 'Atención',
      message: 'El usuario de cédula/correo ' + this.id + ' no existe. Verifique la información e intentelo de nuevo.',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  sendEmail = () => {
    this.userService.getEmail({ id: this.id }).subscribe((res: any) => {
      if (res == null || res.result == null|| res.result.length == 0){
        this.succesAlertF()
        return;
      }
      this.email = res.result[0]["get_email"].replace('(','').replace(')','').split(',')[0]
      this.user = res.result[0]["get_email"].replace('(','').replace(')','').split(',')[1]
      this.code = res.result[0]["get_email"].replace('(','').replace(')','').split(',')[2]

      this.succesAlert(this.email)

      let params = {mail: this.email, user: this.user, code: this.code}
      this.userService.SendHtml(params).subscribe(
        (res: any) => doesNotThrow)
      this.closeModal()

    })
    
    
  }

  closeModal = () => {
    this.modalController.dismiss()
  }

}