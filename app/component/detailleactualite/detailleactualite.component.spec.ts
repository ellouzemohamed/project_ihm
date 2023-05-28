import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleactualiteComponent } from './detailleactualite.component';

describe('DetailleactualiteComponent', () => {
  let component: DetailleactualiteComponent;
  let fixture: ComponentFixture<DetailleactualiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleactualiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleactualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
