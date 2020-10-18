import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poliPriv',
  templateUrl: './politicaprivacidade.component.html',
  styleUrls: ['./politicaprivacidade.component.css']
})
export class PoliticaPrivacidadeComponent implements OnInit {

    constructor() {}

    ngOnInit(): void {
        window.scroll(0, 0);

    }
}