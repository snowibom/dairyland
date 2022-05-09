import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ManageComponent } from './components/manage/manage.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trainers', component: TrainersComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'create', component: CreateComponent },
  { path: 'manage', component: ManageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
