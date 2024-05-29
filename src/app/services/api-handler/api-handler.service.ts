import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarConfigurationDTO, CarModelDTO } from '../../types/types';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) { }

  getTeslaModels() {
    return this.http.get<CarModelDTO[]>("/models")
  }

  getTeslaConfigurations(teslaCode: string){
    return this.http.get<CarConfigurationDTO>(`/options/${teslaCode}`)
  }
}
