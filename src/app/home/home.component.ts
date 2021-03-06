import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

    constructor(public auth: AuthService,
        private slimLoadingBarService: SlimLoadingBarService,
        private toastr: ToastsManager,
        vRef: ViewContainerRef) {
          this.toastr.setRootViewContainerRef(vRef);
    }

    ngOnInit() {
        this.auth.handleAuthentication();
    }
}
