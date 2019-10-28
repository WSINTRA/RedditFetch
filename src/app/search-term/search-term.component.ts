import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-term',
  templateUrl: './search-term.component.html',
  styleUrls: ['./search-term.component.scss']
})
export class SearchTermComponent implements OnInit {
  
  search = ""
  constructor() { }

  ngOnInit() {
  }

}
