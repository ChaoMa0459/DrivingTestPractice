import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionDisplayComponent } from './add-question-display.component';

describe('AddQuestionDisplayComponent', () => {
  let component: AddQuestionDisplayComponent;
  let fixture: ComponentFixture<AddQuestionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuestionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
