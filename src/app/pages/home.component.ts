import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dl-home',
  template: `
    <h1>Dairyland</h1>
    <div class="grid-container m-t-2" style="justify-content: center;">
      <a routerLink="create" class="grid-5 grid-sm-3 text-center button mb-1">
        <img alt="Pikachu" src="assets/images/pokemon/25.png">
        <img alt="Cool Trainer" src="assets/images/trainers/Jr Trainer 1.png">
        <div>Create a Character</div>
      </a>
      <a routerLink="manage" class="grid-5 grid-sm-3 text-center button mb-1">
        <img alt="Trainer" src="assets/images/pokemon/133.png">
        <img alt="Trainer" src="assets/images/trainers/Cool Trainer 2.png">
        <div>Manage Party</div>
      </a>
      <a routerLink="trainers" class="grid-5 grid-sm-3 text-center button mb-1">
        <img alt="Trainer" class="image" src="assets/images/trainers/Trainer.png">
        Trainers
      </a>
      <a routerLink="trainers" class="grid-5 grid-sm-3 text-center button mb-1">
          <img alt="Trainer" class="image" src="assets/images/pokemon/6.png">
          Pokemon
        </a>
    </div>
  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
