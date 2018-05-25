import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { mQuestion } from '../../model/mQuestion';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  message: string = "Vide";
  resultat: boolean = false;
  test: string = "";
  constructor (public navCtrl: NavController) {}

  question1: mQuestion = new mQuestion ('Le livre dhistoire est truqué', true);
  question2: mQuestion = new mQuestion ('Ya rien derrière toi', false);

  reponseFaux(){
    this.test = question1.getIntitule();
    alert("okFaux");
    console.log("okFaux");
  }
  reponseVraie(){
    alert("okVraie");
    console.log("okVraie");
  }
}
