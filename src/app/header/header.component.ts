import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    SearchComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public showSearch = false;

  public toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  public hideSearch() {
    this.showSearch = false;
  }
}
