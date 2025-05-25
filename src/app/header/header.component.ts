import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';
import {FilterSearchComponent} from '../filter-search/filter-search.component';

@Component({
  selector: 'app-header',
  imports: [
    SearchComponent,
    NgIf,
    FilterSearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
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
