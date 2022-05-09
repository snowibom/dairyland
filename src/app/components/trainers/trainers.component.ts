import { Component, OnInit } from '@angular/core';
import { ITrainers } from './trainers';
import { TrainersService } from './trainers.service';

@Component({
  selector: 'dl-trainers',
  templateUrl: './trainers.component.html',
})
export class TrainersComponent implements OnInit {
  trainers: ITrainers[] = [];
  filteredTrainers: any[] = [];
  listFilter = {
    name: '',
  }
  performFilter() {
    this.filteredTrainers = this.trainers.filter((item: any) =>
      item.name.toLocaleLowerCase().includes(this.listFilter.name.toLocaleLowerCase())
      )
  }

  constructor(private triainersService: TrainersService) { }

  ngOnInit(): void {
    this.trainers = this.triainersService.getTrainers();
    this.performFilter()
  }

}
