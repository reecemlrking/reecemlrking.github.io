import { Component, input } from '@angular/core';
import { LanguageDetails } from '../languagedetails';
import { LanguageComponent } from '../language/language.component';

// Import languages JSON file
import languagesJson from '../json/languages.json';

// Format languages details
const languages: LanguageDetails[] = [];
for (var i = 0; i < languagesJson.length; i++) {
  languages.push(languagesJson[i]);
}

// Sort languages array by name
languages.sort((n1, n2) => {
  if (n1.name > n2.name) {
    return 1
  }

  if (n1.name < n2.name) {
    return -1
  }

  return 0;
})

@Component({
  selector: 'app-languages',
  imports: [LanguageComponent],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css',
})
export class LanguagesComponent {
  languageDetailsList: LanguageDetails[] = languages;
}
