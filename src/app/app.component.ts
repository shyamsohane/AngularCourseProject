import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourseProject';
  loadedFeature : string;
  OnFeatureSelected(loadedFeature : string)
  {
    this.loadedFeature = loadedFeature;
  }
}
