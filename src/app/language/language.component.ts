import { Component, input } from '@angular/core';
import { LanguageDetails } from '../languagedetails';

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.css',
})
export class LanguageComponent {
  languageDetails = input.required<LanguageDetails>();
}
