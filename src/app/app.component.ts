import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BioComponent } from "./bio/bio.component";
import { LanguagesComponent } from './languages/languages.component';
import { ProjectsComponent } from './projects/projects.component';
import { LanguageDetails } from './languagedetails';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BioComponent, LanguagesComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';
}
