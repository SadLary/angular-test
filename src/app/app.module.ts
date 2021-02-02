import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { DeletedComponent } from './deleted/deleted.component';
import { ListComponent } from './list/list.component';
import { SmileComponent } from './smile/smile.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllComponent } from './all/all.component';

import { FilterPipe } from './smile-pipe.pipe'

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    FavoriteComponent,
    DeletedComponent,
    ListComponent,
    SmileComponent,
    NavigationComponent,
    AllComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
