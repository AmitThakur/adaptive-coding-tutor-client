import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit {
  code = `print(hello`;
  exercise = {'title': '', description: ''};
  result = { error: false, output: ''};

  constructor(private dataService: DataService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    const exerciseid = this.route.snapshot.paramMap.get('exerciseid');
    let index = Number(exerciseid);
    console.log('exerciseid: ' + exerciseid);
    this.dataService.getExercises().subscribe(data => {
      this.exercise = data[index];
      console.log(this.exercise);
    });
  }

  public onValueChange(value: any): void {
    console.log('Value changed...');
    console.log(value);
  }

  public onCompileClick() {
    // this.dataService.checkServerHealth().subscribe(status => {
    //   console.log('Status is: '+ JSON.stringify(status));
    // });

    this.dataService.compileCode(this.code, 'python').subscribe(data => {
      console.log('result is: '+ JSON.stringify(data));
      this.result = data;
      this.result.output = this.result.output.replace(/(?:\r\n|\r|\n)/g, '<br>');
    });
  }
}
