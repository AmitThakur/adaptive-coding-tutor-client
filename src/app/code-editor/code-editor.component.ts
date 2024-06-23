import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-code-editor',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './code-editor.component.html',
  styleUrl: './code-editor.component.css'
})
export class CodeEditorComponent {
  code = `# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))`;

  constructor(private dataService: DataService) {

  }

  public onValueChange(value: any): void {
    console.log('Value changed...');
    console.log(value);
  }

  public onCompileClick() {
    // this.dataService.checkServerHealth().subscribe(status => {
    //   console.log('Status is: '+ JSON.stringify(status));
    // });

    this.dataService.compileCode(this.code, 'python').subscribe(result => {
      console.log('result is: '+ JSON.stringify(result));
    });
  }
}
