import { Injectable } from '@angular/core';
import { CarColorDTO, CarDetails, CarInfoTypoDTO } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class StateHandlerService {
  selectedCar: CarDetails = {}

  constructor() { }

  getCarSummary(): CarDetails{
    console.log(this.selectedCar)
    return this.selectedCar
  }

  isCarSelected():boolean {
    return !!(this.selectedCar.color && this.selectedCar.code && this.selectedCar.description )
  }

  isCarConfigured():boolean {
    return !!(this.selectedCar.config)
  }

  setCarConfigs(carConfigurations?: CarInfoTypoDTO) {
    this.selectedCar.config = carConfigurations
  }

  setCarTowHitch(towHitch: boolean) {
    this.selectedCar.towHitch = towHitch
  }
  setCarYoke(yoke: boolean){
    this.selectedCar.yoke = yoke
  }
  setSelectedCarModel(code:string, description:string, color: CarColorDTO) {
    this.selectedCar.code = code
    this.selectedCar.description = description
    this.selectedCar.color = color
  }
  resetSelectedCar() {
    this.selectedCar.code = undefined
    this.selectedCar.description = undefined
    this.selectedCar.color = undefined
    this.selectedCar.config = undefined
    this.selectedCar.towHitch = undefined
    this.selectedCar.yoke = undefined
  }

  resetCarConfigurator() {
    this.selectedCar.config = undefined
  }
}
