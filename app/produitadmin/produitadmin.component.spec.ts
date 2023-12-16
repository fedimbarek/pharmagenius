import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitadminComponent } from './produitadmin.component';

describe('ProduitadminComponent', () => {
  let component: ProduitadminComponent;
  let fixture: ComponentFixture<ProduitadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
