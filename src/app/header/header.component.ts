import { Component, HostListener } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { NgIf } from '@angular/common';
import { FilterSearchComponent } from '../filter-search/filter-search.component';

@Component({
  selector: 'app-header',
  imports: [SearchComponent, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {

  public isMobile = false;
  public isMenuOpen = false;
  public showSearch = false;

  public toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  public hideSearch() {
    this.showSearch = false;
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
