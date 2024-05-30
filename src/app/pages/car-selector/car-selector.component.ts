import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarColorDTO, CarModelDTO } from '../../types/types';
import { ApiHandlerService } from '../../services/api-handler/api-handler.service';
import { StateHandlerService } from '../../services/state-handler/state-handler.service';

@Component({
  selector: 'app-car-selector',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './car-selector.component.html',
  styleUrl: './car-selector.component.scss'
})
export class CarSelectorComponent {
  chooseCarForm = new FormGroup({
    modelSelect: new FormControl('', [Validators.required]),
    colorSelect: new FormControl('', [Validators.required]),
  });

  teslaModels: CarModelDTO[] = []
  carColors: CarColorDTO[] = []

  constructor(private apiHandler: ApiHandlerService, private state: StateHandlerService) {}

  ngOnInit(){
    this.subscribeToGetTeslaModels()
    this.subscribeToTeslaModelOnChange()
    this.subscribeToFormStatusOnChange()
  }

  subscribeToGetTeslaModels() {
    this.apiHandler.getTeslaModels().subscribe(data => {
      this.teslaModels = data
      if(this.state.isCarSelected()){
        this.initByState()
      }
    })  
  }

  initByState() {
    const summary = this.state.getCarSummary()
    console.log(summary)
    this.chooseCarForm.setValue({modelSelect: summary.code!, colorSelect: summary.color?.code!})
  }

  subscribeToTeslaModelOnChange() {
    this.chooseCarForm.controls['modelSelect'].valueChanges.subscribe(value => {
      this.resetColorsFormControl()
      this.initColorsArray(value)
    });
  }

  subscribeToFormStatusOnChange() {
    this.chooseCarForm.statusChanges.subscribe(status => {
      if(this.chooseCarForm.dirty) {
        switch(status) {

          case 'VALID':
            const chosenModel = this.teslaModels.find(({code}) => code === this.chooseCarForm.get('modelSelect')?.value)
            const chosenColor = chosenModel?.colors.find(({code}) => code === this.chooseCarForm.get('colorSelect')?.value)
            console.log("chosenModel",chosenModel)
            console.log("teslamodel",this.teslaModels)
            this.state.setSelectedCarModel(
              chosenModel!.code,
              chosenModel!.description,
              chosenColor!
            )
            break;
          default:
            this.state.resetSelectedCar()
        }
      }
    });
  }

  initColorsArray(modelCode: string | null) {
    const newColors = this.teslaModels.find(({code}) => code === modelCode)?.colors
    if (newColors) {
      this.carColors = newColors
      this.chooseCarForm.controls['colorSelect'].setValue(this.carColors[0].code)
    } else {
      this.carColors = []
    }
  }

  resetColorsFormControl() {
    this.chooseCarForm.controls['colorSelect'].setValue('');
  }

}
