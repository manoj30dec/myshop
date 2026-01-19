import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public users = input([])

  // ngOnInit() {
  //   console.log(this.users)
  // }

}
