import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ConfiguratorStepperComponent } from './components/configurator-stepper/configurator-stepper.component';
import { ImageShowcaseComponent } from './components/image-showcase/image-showcase.component';
import { StateHandlerService } from './services/state-handler/state-handler.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ConfiguratorStepperComponent, ImageShowcaseComponent],
  templateUrl: `./app.component.html`,
  styleUrl:'./app.component.scss'
})
export class AppComponent {
  constructor(public state: StateHandlerService){}
}
