import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarConfigurationDTO, CarInfoTypoDTO } from '../../types/types';
import { ApiHandlerService } from '../../services/api-handler/api-handler.service';
import { StateHandlerService } from '../../services/state-handler/state-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-configurator',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './car-configurator.component.html',
  styleUrl: './car-configurator.component.scss'
})
export class CarConfiguratorComponent {
  configurations?: CarConfigurationDTO
  carConfiguration?: CarInfoTypoDTO

  configuratorForm = new FormGroup({
    configSelect: new FormControl(-1, [Validators.required, Validators.min(0)])
  });

  constructor(private router: Router, private apiHandler: ApiHandlerService, protected state: StateHandlerService) {}

  ngOnInit(){
    if(!this.state.isCarSelected()){
      this.router.navigate(['/', 'selectCar'])
    }

    this.subscribeToCarConfigs()
    this.subscribeToConfigSelectChanges()
    this.subscribeToFormStatusChanges()
  }

  subscribeToCarConfigs() {
    this.apiHandler.getTeslaConfigurations(this.state.getCarSummary().code!).subscribe(data => {
      this.configurations = data
      if(this.state.isCarConfigured()){
        this.initByState()
      }
    })  
  }

  initByState() {
    const summary = this.state.getCarSummary()
    this.configuratorForm.setValue({configSelect: summary.config?.id!})
  }

  subscribeToConfigSelectChanges() {
    this.configuratorForm.controls['configSelect'].valueChanges.subscribe(value => {
      this.carConfiguration = this.configurations?.configs.find(({id}) => id == value)
    });
  }

  onChangeYoke(event: Event) {
    this.state.setCarYoke((<HTMLInputElement>event.target).checked)
  }

  onChangeTowHitch(event: Event) {
    this.state.setCarTowHitch((<HTMLInputElement>event.target).checked)
  }

  subscribeToFormStatusChanges() {
    this.configuratorForm.statusChanges.subscribe(status => {
      switch(status) {
        case 'VALID':
          this.state.setCarConfigs(this.carConfiguration)
          break;
        default:
          this.state.resetCarConfigurator()
      }
    });
  }

}
