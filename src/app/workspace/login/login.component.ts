import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { User } from 'src/app/shared/models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  tip: string = '';
  loginText: string = '登录';
  public user: User = new User();
  constructor(
    private renderer2: Renderer2,
    private elRef: ElementRef,
    private router: Router
  ) {
    this.renderer2.addClass(document.body, 'login-body');
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.renderer2.removeClass(document.body, 'login-body');
  }

  /**
   * 登录
   */
  login() {
    this.tip = "";
    this.loginText = "登录中...";
    this.router.navigateByUrl("/admin/dashboard");
    // if (this.user.password == "qaz123456" && this.user.username == "zhangjing") {
    //   setTimeout(() => {
    //     this.router.navigateByUrl("pages");
    //   }, 2000)
    // } else {
    //   setTimeout(() => {
    //     this.loginText = "登录";
    //     this.tip = "账号或者密码错误,请重新输入";
    //   }, 2000)
    // }

    // let el = document.getElementById("tip-box");
    // this.renderer2.removeClass(el, 'visiblility-hidden');
  }

}
