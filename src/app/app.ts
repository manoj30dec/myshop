import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { PrimeFooter } from './components/prime-footer/prime-footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Navbar, PrimeFooter, RouterOutlet]
})
export class App {
  // protected title = 'iSadarBazar';
  constructor(private titleService: Title) {
    // this.titleService.setTitle(this.title);
  }


  ngOnInit() {
    console.log('App component initialized.');
  }



}

