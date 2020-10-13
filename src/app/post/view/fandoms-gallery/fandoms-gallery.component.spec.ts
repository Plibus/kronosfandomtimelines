import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FandomsGalleryComponent } from './fandoms-gallery.component';

describe('FandomsGalleryComponent', () => {
  let component: FandomsGalleryComponent;
  let fixture: ComponentFixture<FandomsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FandomsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FandomsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
