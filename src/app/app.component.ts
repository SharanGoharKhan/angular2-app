import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: ['h1 { color: blue; }']
})
export class AppComponent {
   username:string='';
   
   constructor()
    {
        console.log("App Component called");
    }
}
