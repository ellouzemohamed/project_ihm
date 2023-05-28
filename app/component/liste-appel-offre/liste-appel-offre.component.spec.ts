import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAppelOffreComponent } from './liste-appel-offre.component';

describe('ListeAppelOffreComponent', () => {
  let component: ListeAppelOffreComponent;
  let fixture: ComponentFixture<ListeAppelOffreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAppelOffreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAppelOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
