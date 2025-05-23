import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
  selector: 'app-country-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './CountryLayout.component.html',
})
export class CountryLayoutComponent { }
