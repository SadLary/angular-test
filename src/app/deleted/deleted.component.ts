import { Component, OnInit } from '@angular/core';
import { SmileServiceService } from '../../smile-service.service'

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  deleted;
  constructor(
    private SmileServiceService: SmileServiceService,
  ) { }
  getDeleted(){
    this.deleted = this.SmileServiceService.getDeleted()
  }
  ngOnInit() {
    this.getDeleted();
  }

}

