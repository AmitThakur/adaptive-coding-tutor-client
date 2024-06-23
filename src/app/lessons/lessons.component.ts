import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  lessons = [
    {
      title: "",
      description: "",
      completed: true
    }
  ];

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    this.dataService.getLessons().subscribe(data => {
      this.lessons = data;
      console.log(this.lessons);
    });
  }


}
