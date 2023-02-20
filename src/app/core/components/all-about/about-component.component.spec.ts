import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAboutComponent } from './about-component.component';

describe('AboutComponentComponent', () => {
  let component: AllAboutComponent;
  let fixture: ComponentFixture<AllAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
