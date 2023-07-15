import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private _toaster: ToastrService) {}

  ngOnInit() {
    // this._toaster.info('This is an information message.');
    // this._toaster.warning('This is a warning message.');
    // this._toaster.error('This is an error message.');
    // this._toaster.success('This is a success message.');
    
    this._toaster.info('This is an information message.', 'bhawnagunwani.com');
    this._toaster.warning('This is a warning message.', 'bhawnagunwani.com');
    this._toaster.error('This is an error message.', 'bhawnagunwani.com');
    this._toaster.success('This is a success message.', 'bhawnagunwani.com');

    // this._toaster.info('This is an information message.', 'bhawnagunwani.com', 
    // { timeOut:10000, closeButton: true, positionClass:'toast-bottom-left'});

  }

}
