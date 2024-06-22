import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
  exercises = [
    {
      title: "Exercise 01",
      description: "This is a decsription of exercise-01"
    },
    {
      title: "Exercise 02",
      description: "This is a decsription of exercise-02"
    },
    {
      title: "Exercise 03",
      description: "This is a decsription of exercise-01"
    },
    {
      title: "Exercise 04",
      description: "This is a decsription of exercise-04"
    }
  ];
}
