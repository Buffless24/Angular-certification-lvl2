import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguratorStepperComponent } from './configurator-stepper.component';

describe('ConfiguratorStepperComponent', () => {
  let component: ConfiguratorStepperComponent;
  let fixture: ComponentFixture<ConfiguratorStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguratorStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguratorStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
