import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: []
})
export class VerifyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const script = document.createElement('script');

    script.src = 'https://digitalid-sandbox.com/sdk/app.js';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {

      /* Verify with Digital iD */
      window.digitalId.init({
        clientId: '[YOUR CLIENT ID]',
        uxMode: 'popup',
        onLoadComplete() {
        },
        onComplete(msg) {

        },
        onClick(opts) {
        },
        onKeepAlive() {
        }
      });
    };
  }
}
