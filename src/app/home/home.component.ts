import { Component } from '@angular/core';
import { CodeEditorComponent } from '../code-editor/code-editor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CodeEditorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
