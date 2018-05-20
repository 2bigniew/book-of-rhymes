import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerData = 'Created by 2bigniew';

  constructor() { }

  ngOnInit() {
  }

  showPhoneNumber() {
    this.footerData = 'Phone: 690644477';
  }

  showMailAdress() {
    this.footerData = 'Email adress: stasiakzb@gmail.com';
  }

  resetFooterData() {
    this.footerData = 'Created by 2bigniew';
  }


}
