import { Component } from '@angular/core';
import { FormSubjectComponent } from '../form-subject/form-subject.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { Subject } from '../subject.model';

@Component({
  selector: 'app-edit-subject',
  standalone: true,
  imports: [
    FormSubjectComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './edit-subject.component.html',
  styleUrl: './edit-subject.component.css'
})
export class EditSubjectComponent {
  currentSubject!: Subject;
  constructor() {
  }

  ngOnInit() {
    this.currentSubject = {
      label: "Grails",
      nomProf: "Galli",
      imgProf: "http://localhost:4200/azertyuiop"
    };
  }
}
