import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bohr } from "./shared/components/bohr/bohr";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bohr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('new-portfolio');
}
