import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { PrimeFooter } from '../../components/prime-footer/prime-footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  imports: [Navbar, PrimeFooter, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

}
