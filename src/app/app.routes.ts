import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ExercisesComponent } from './exercises/exercises.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
    },
    {
        path: 'code-editor/:exerciseid',
        component: CodeEditorComponent,
        title: 'Code Editor',
    },
    {
        path: 'lessons',
        component: LessonsComponent,
        title: 'Lessons'
    },
    {
        path: 'exercises',
        component: ExercisesComponent,
        title: 'Exercises'
    }
];
