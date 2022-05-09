export class PokemonComponent {
  list: any[] = [];
  filteredList: any[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredList = this.performFilter(value);
  }

  performFilter( filterBy: string ): any[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.list.filter((search) =>
      search.name.toLocaleLowerCase().includes(filterBy))
  }
}
