// <!-- COMP229 - Fall 2021 - - Sec 09
// Group - 13
// WEbExpert -->

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    if (confirm('Confirm to logout')) {
      this.auth.clear();
      this.router.navigateByUrl("/");
    }
  }

}
