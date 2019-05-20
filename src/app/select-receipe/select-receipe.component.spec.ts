import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectReceipeComponent } from './select-receipe.component';

describe('SelectReceipeComponent', () => {
  let component: SelectReceipeComponent;
  let fixture: ComponentFixture<SelectReceipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectReceipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectReceipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
