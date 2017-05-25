import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: ['.logsClass { color: white;background:blue }']
})
export class AppComponent {
   username:string = '';
   showDetails:boolean = false;
   log=[]
   constructor()
    {
        console.log("App Component called");
    }
    updateDetails()
    {
      this.showDetails = this.showDetails==false ? true : false;
      this.log.push(this.log.length+1);
    }
}
