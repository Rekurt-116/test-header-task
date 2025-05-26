import {Component, HostListener, Output, EventEmitter} from '@angular/core';
import { FilterSearchComponent } from '../filter-search/filter-search.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-search',
  imports: [
    FilterSearchComponent,
    NgIf 
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
})
export class SearchComponent {
  showFilter = false;
  isMobile = window.innerWidth <= 768;

  @Output()
  closeSearch = new EventEmitter<void>();

  @HostListener('document:click', ['$event.target'])
  onClickoutside(target: HTMLElement) {
    const clickInside = target.closest('app-search');
    if(!clickInside) {
      this.closeSearch.emit();
    }
  }

  close() {
    this.closeSearch.emit();
  }

  public toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  public hideFilter() {
    this.showFilter = false;
  }
}
