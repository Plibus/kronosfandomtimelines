import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFandomComponent } from './search-fandom.component';

describe('SearchFandomComponent', () => {
  let component: SearchFandomComponent;
  let fixture: ComponentFixture<SearchFandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
