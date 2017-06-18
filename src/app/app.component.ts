import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.logsClass { color: white;background:blue }']
})
export class AppComponent implements OnInit {
   
   ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDar_wKkKfe9rtFncY9gd4TqVpx34B19Ak",
      authDomain: "ng-recipe-book-7654d.firebaseapp.com"
    });
   }
   constructor(){
  }
}
