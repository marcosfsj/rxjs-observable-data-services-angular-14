import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
  idToEdit!: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idToEdit = Number(this.route.snapshot.paramMap.get('id'));
  }

}
