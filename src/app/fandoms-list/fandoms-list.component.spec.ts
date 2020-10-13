import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FandomsListComponent } from './fandoms-list.component';

describe('FandomsListComponent', () => {
  let component: FandomsListComponent;
  let fixture: ComponentFixture<FandomsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FandomsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FandomsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
