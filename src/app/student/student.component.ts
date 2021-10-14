import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // creazione lista studenti
  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M',isPro:false },
    { name: 'Luca Pelissero', hobby: 'Arrampicata', gender: 'M',isPro:true },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F',isPro:false },
    { name: 'Chiara Giordano', hobby: 'Volley', gender: 'F',isPro:true },
    { name: 'Michele Ghisolfi', hobby: 'Judo', gender: 'M',isPro:false },
    { name: 'Simone Marengo', hobby: 'Paddle', gender: 'M',isPro:true },
    { name: 'Paolo Vietti', hobby: 'Paddle', gender: 'M',isPro:false },
    { name: 'Federico Mameli', hobby: 'Danza', gender: 'M',isPro:false },
    { name: 'Lorenzo Cravero', hobby: 'Calcio', gender: 'M',isPro:true },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F',isPro:true },
    { name: 'Edoardo Ababei', hobby: 'Palestra', gender: 'M',isPro:false },
    { name: 'Ivan Anjelovski', hobby: 'Palestra', gender: 'M',isPro:true }
  ]

  student: any;

  constructor() {
    // tutte le volte che viene istanziato uno studente ne viene preso uno a caso nella lista
    this.randomStudent();
  }

  private randomStudent() {
    let num = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[num];
  }

  ngOnInit(): void {
  }

  onStudentClick() {
    this.randomStudent();
  }

}
