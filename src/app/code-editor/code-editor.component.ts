import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [ FormsModule, CommonModule ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent implements OnInit {
  code = '';
  exercise = {'title': '', description: '', code: ''};
  result = { error: false, output: ''};
  reviewOutput = '';
  loadingReview = false;

  constructor(private dataService: DataService, 
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {

  }
  ngOnInit(): void {
    const exerciseid = this.route.snapshot.paramMap.get('exerciseid');
    let index = Number(exerciseid);
    console.log('exerciseid: ' + exerciseid);
    this.dataService.getExercises().subscribe(data => {
      this.exercise = data[index];
      console.log(this.exercise);
      this.code = this.exercise.code;
    });
  }

  public onValueChange(value: any): void {
    console.log('Value changed...');
    console.log(value);
  }

  public onCompileClick() {
    this.dataService.compileCode(this.code, 'python').subscribe(data => {
      console.log('result is: '+ JSON.stringify(data));
      this.result = data;
      this.result.output = this.result.output.replace(/(?:\r\n|\r|\n)/g, '<br>');
    });
  }

  doCodeReview() {
    this.loadingReview = true;
    let apiKey = prompt("Please enter ChatGPT API Key:") || '';
    console.log('Doing code review...');
    this.chatService.getChatResponse('Generate code review for following code: ' + this.code, apiKey)
    .subscribe(response => {
      this.reviewOutput = response.choices[0].message.content;
      this.loadingReview = false;
      console.log(this.reviewOutput);
      // console.log(JSON.stringify());

    })
  }
}
