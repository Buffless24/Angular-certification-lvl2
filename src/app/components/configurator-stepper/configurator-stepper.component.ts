import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurator-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './configurator-stepper.component.html',
  styleUrl: './configurator-stepper.component.scss'
})
export class ConfiguratorStepperComponent {
  @Input() configuratorEnabled = false
  @Input() summaryEnabled =  false

  constructor(protected router: Router){}

  navigateToStep(stepperPhase: string){
    console.log(stepperPhase)
    this.router.navigate(['/', `${stepperPhase}`])
  }
}
