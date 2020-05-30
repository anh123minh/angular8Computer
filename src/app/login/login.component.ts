import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificationService } from '../core/services/notification.service';
import { AuthenService } from '../core/services/authen.service';
import { MessageContstants } from '../core/common/message.constants';
import { UrlConstants } from '../core/common/url.constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading = false;
  model: any = {};
  returnUrl: string;
  constructor(private authenService: AuthenService,
    private notificationService: NotificationService,
    private router: Router) { }  

  ngOnInit() {
    document.body.className = "hold-transition login-page";
  }
  login() {
    this.loading = true;
    this.authenService.login(this.model.username, this.model.password)
    .then(data => {
      this.router.navigate([UrlConstants.HOME]);
    }).catch(error=>{
      this.notificationService.printErrorMessage(MessageContstants.SYSTEM_ERROR_MSG);
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    document.body.className = "hold-transition sidebar-mini";
  }
}
