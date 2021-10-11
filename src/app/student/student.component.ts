import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  // creazione lista studenti
  studentList = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M' },
    { name: 'Luca Pelissero', hobby: 'Arrampicata', gender: 'M' },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F' },
    { name: 'Paolo Giordano', hobby: 'Volley', gender: 'M' },
    { name: 'Michele Ghisolfi', hobby: 'Judo', gender: 'M' },
    { name: 'Veronico Galvagno', hobby: 'Paddle', gender: 'F' },
    { name: 'Chiara Pelissero', hobby: 'Paddle', gender: 'F' },
    { name: 'Federico Mameli', hobby: 'Danza', gender: 'M' },
    { name: 'Lorenzo Cravero', hobby: 'Calcio', gender: 'M' },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F' },
    { name: 'Edoardo Ababei', hobby: 'Palestra', gender: 'M' },
    { name: 'Ivan Anjelovski', hobby: 'Palestra', gender: 'M' }
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
