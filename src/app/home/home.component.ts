import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <p>
      <section>
        <form>
          <input type="text" placeholder="Filter by City">
          <button classs="primary" type="button">Search</button>
</form>
</section>
<section class="results">
  <app-housing-location></app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];

}
