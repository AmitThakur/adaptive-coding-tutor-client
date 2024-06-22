import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent {
  lessons = [
    {
      title: "Chapter 01",
      description: "This is a decsription of ch-01"
    },
    {
      title: "Chapter 02",
      description: "This is a decsription of ch-02"
    },
    {
      title: "Chapter 03",
      description: "This is a decsription of ch-03"
    },
    {
      title: "Chapter 04",
      description: "This is a decsription of ch-04"
    }
  ];
}
