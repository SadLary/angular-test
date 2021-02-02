import { Component, OnInit } from '@angular/core';
import { SmileServiceService } from '../../smile-service.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  allSmiles = [];
  searchText ='';
  constructor(
    private SmileServiceService: SmileServiceService,
    private http: HttpClient
  ) { }
  toDeleted(smile) {
    this.SmileServiceService.addToDeleted(smile)
  }
  getAll() {
    if (JSON.parse(localStorage.getItem('All'))) {
      this.allSmiles = JSON.parse(localStorage.getItem('All'))
    } else {
      this.http.get('https://api.github.com/emojis').subscribe((response) => {
        Object.entries(response).reduce((acc, item) => {
          const [name, link] = item;
          this.allSmiles.push({ name, link });
          return acc;
        }, [])
        localStorage.setItem("All", JSON.stringify(this.allSmiles))
      });
    }
  }
  ngOnInit() {
    this.getAll();
  }
}
