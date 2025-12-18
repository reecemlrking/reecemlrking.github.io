import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BioComponent } from "./bio/bio.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-site';
}
