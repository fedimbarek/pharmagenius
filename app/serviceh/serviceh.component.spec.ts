import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicehComponent } from './serviceh.component';

describe('ServicehComponent', () => {
  let component: ServicehComponent;
  let fixture: ComponentFixture<ServicehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
