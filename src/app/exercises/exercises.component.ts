import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent implements OnInit {
  exercises =  [];
  
  ngOnInit() {
    
  }

  constructor(private dataService: DataService,  private router: Router) {
    this.dataService.getExercises().subscribe(data => {

      this.exercises = data;
      console.log(this.exercises);
    });
  }

  loadExercise(i: number) {
    console.log(i);
    this.router.navigate(["/code-editor/" + i]);
  }
}
