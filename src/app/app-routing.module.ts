import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedComponent } from './deleted/deleted.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AllComponent } from "./all/all.component"
// import { SmilePipePipe } from './smile-pipe.pipe';

const routes: Routes = [
  {path: '', component: AllComponent},
  {path: 'deleted', component: DeletedComponent},
  {path: 'favorites', component: FavoriteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [
    // SmilePipePipe
  ]
})
export class AppRoutingModule { }
