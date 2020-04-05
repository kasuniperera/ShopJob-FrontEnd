import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyformComponent } from './vacancyform.component';

describe('VacancyformComponent', () => {
  let component: VacancyformComponent;
  let fixture: ComponentFixture<VacancyformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
