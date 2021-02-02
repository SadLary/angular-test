import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SmileServiceService {
  allSmiles;
  deletedSmiles=[];
  favoritesSmiles;
  constructor(
    private http: HttpClient
  ) { }
  addToDeleted(smile) {
    this.deletedSmiles.push(smile)
    localStorage.setItem("Deleted", JSON.stringify(this.deletedSmiles))
  }
  getDeleted(){
    return this.deletedSmiles = JSON.parse(localStorage.getItem('Deleted'))
  }
  addToFavorites(smile) {
    this.favoritesSmiles.push(smile)
    localStorage.setItem("Favorites", JSON.stringify(this.favoritesSmiles))
  }
  getFavorites(){
    this.favoritesSmiles = JSON.parse(localStorage.getItem('Favorites'))
  }
  getAll() {
    this.http.get('https://api.github.com/emojis').subscribe((response) => {
      this.allSmiles = response;
      console.log(this.allSmiles);
    });
  }
}
