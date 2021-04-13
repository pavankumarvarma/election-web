import { Component, OnInit } from '@angular/core';
import { ElectionsService } from '../../services/elections.service';


@Component({
  selector: 'app-election-dashboard',
  templateUrl: './election-dashboard.component.html',
  styleUrls: ['./election-dashboard.component.css']
})
export class ElectionDashboardComponent implements OnInit {

  constructor(private electionsservice: ElectionsService) { }
   elections: any;
   title = '';
  ngOnInit() {
    this.retrieveElections();
  }

  retrieveElections() {
	  this.electionsservice.getAll()
		.subscribe(
		  data => {
			this.elections = data;
			console.log(data);
		  },
		  error => {
			console.log(error);
		  });
  }

  searchTitle() {
	  this.electionsservice.searchAll(this.title)
		.subscribe(
		  data => {
			this.elections = data;
			console.log(data);
		  },
		  error => {
			console.log(error);
		  });
  }
  orderByVoteCount() {
	  this.electionsservice.orderByVoteCount()
		.subscribe(
		  data => {
			this.elections = data;
			console.log(data);
		  },
		  error => {
			console.log(error);
		  });
  }

  sortByLatest() {
	  this.electionsservice.sortByLatest()
		.subscribe(
		  data => {
			this.elections = data;
			console.log(data);
		  },
		  error => {
			console.log(error);
		  });
	}



}
