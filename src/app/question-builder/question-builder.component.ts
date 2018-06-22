import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import { NgRedux } from '@angular-redux/store';
import {HttpClientModule} from '@angular/common/http'; // <- New

@Component({
  selector: 'app-question-builder',
  templateUrl: './question-builder.component.html',
  styleUrls: ['./question-builder.component.css']
})
export class QuestionBuilderComponent implements OnInit {

  questionCreatorFrom: FormGroup;
  countOfQuestions: number;
  arrayOfQuestions = {
      'author': 'lox',
      'questions': [
        {
          title: 'How are you?',
          answers: ['ok', 'not ok', 'good'],
          rightAnswer: 1
        }
      ]
    }
  ;
  paramsId: number;
  activeQuestion = this.arrayOfQuestions.questions[0];
  author: any;
 title;
 answers;
 rightAnswer;
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private router: Router, private http: HttpClientModule) {
    /*ngRedux.select<any>('author') // <- New
    .subscribe(newCount => this.author = newCount);
    ngRedux.select<any>('questions') // <- New
    .subscribe(newQuest => this.question = newQuest);
    */
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.paramsId = params['id'];
    });
    this.questionCreatorFrom = this.fb.group({
      type: ['', Validators.required],
      text: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      answer: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  check(){

    const data = {
      author: 'lop',
      questions: [
        {
          title: 'How are you?',
          answers: ['ok', 'not ok', 'good'],
          rightAnswer: 1
        },
        {
          title: 'How ',
          answers: ['ok', 'not ok', 'good'],
          rightAnswer: 1
        }
      ]
    };

    console.log(1);
  }
  onSubmit(form: FormGroup) {
    if(this.paramsId <= this.countOfQuestions) {
      this.paramsId = Number(Number(this.paramsId) + 1);
      this.activeQuestion = this.arrayOfQuestions[this.paramsId];
      this.router.navigate([`/question/${this.paramsId}`]);
    } else {
      console.log('No more questions');
    }
    this.arrayOfQuestions.questions.push(
      {
        title: 'How are you?',
        answers: ['ok', 'not ok', 'good'],
        rightAnswer: 1
      }
    );

    console.log(this.arrayOfQuestions);
  }
}
