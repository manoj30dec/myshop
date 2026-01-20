import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: []
})
export class Home {
  public users = input([])

  // ngOnInit() {
  //   console.log(this.users)
  // }

}
