import { Component } from '@angular/core';
import { CarDetails } from '../../types/types';
import { StateHandlerService } from '../../services/state-handler/state-handler.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-page.component.html',
  styleUrl: './summary-page.component.scss'
})
export class SummaryPageComponent {
  carSummary: CarDetails = {}

  constructor(private state: StateHandlerService, public router: Router) {}

  ngOnInit(){
    if(!this.state.isCarSelected()){
      this.router.navigate(['/', 'selectCar'])
    }
    if(!this.state.isCarConfigured()){
      this.router.navigate(['/', 'configureCar'])
    }
    this.carSummary = this.state.getCarSummary()
  }

}
