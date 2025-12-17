import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BioComponent } from "./bio/bio.component";
import { LanguagesComponent } from './languages/languages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BioComponent, LanguagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';
}
