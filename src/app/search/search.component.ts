import {Component, ElementRef, HostListener, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  standalone: true,
})
export class SearchComponent {
  showFilter = false;

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
}
