import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddQuestionsComponent } from './admin-add-questions.component';

describe('AdminAddQuestionsComponent', () => {
  let component: AdminAddQuestionsComponent;
  let fixture: ComponentFixture<AdminAddQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
