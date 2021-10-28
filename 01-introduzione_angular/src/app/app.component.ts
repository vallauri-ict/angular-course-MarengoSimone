import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("txtName") txtName !: ElementRef;

  title = '5 INF B 2021/22';
  studentRepository = [
    { name: 'Ettore Esposito', hobby: 'Karate', gender: 'M',isPro:false },
    { name: 'Luca Pelissero', hobby: 'Arrampicata', gender: 'M',isPro:false },
    { name: 'Bianca Teleman', hobby: 'Volley', gender: 'F',isPro:false },
    { name: 'Chiara Giordano', hobby: 'Volley', gender: 'F',isPro:false },
    { name: 'Michele Ghisolfi', hobby: 'Judo', gender: 'M',isPro:false },
    { name: 'Simone Marengo', hobby: 'Paddle', gender: 'M',isPro:false },
    { name: 'Paolo Vietti', hobby: 'Paddle', gender: 'M',isPro:false },
    { name: 'Federico Mameli', hobby: 'Danza', gender: 'M',isPro:false },
    { name: 'Lorenzo Cravero', hobby: 'Calcio', gender: 'M',isPro:false },
    { name: 'Marta Baudracco', hobby: 'Volley', gender: 'F',isPro:false },
    { name: 'Edoardo Ababei', hobby: 'Palestra', gender: 'M',isPro:false },
    { name: 'Ivan Anjelovski', hobby: 'Palestra', gender: 'M',isPro:false }
  ]

  hobbies = ['Karate','Paddle','Danza','Calcio','Palestra','Arrampicata','Volley','Tennis'];
  studentList : any[] = [];

  studentName:string = "";
  studentGender:string = "F";
  studentHobbie:string = "";

  constructor(){
    for(let i = 0;i < 4;i++)
    {
      let num = Math.floor(Math.random() * this.studentRepository.length);
      let tempStudent = this.studentRepository[num];
      this.studentList.push(tempStudent);
      this.studentRepository.splice(num,1);
    }
  }

  onAddStudent(){
    let newStudent = {
      name:this.studentName, 
      hobby: this.studentHobbie,
      gender:this.studentGender,
      isPro:true
    };
    this.studentList.push(newStudent);
    this.studentName = "";
    this.txtName.nativeElement.focus();
  }

  onDeleteStudent(index:number){
    this.studentList.splice(index,1);
  }
}
