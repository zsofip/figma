import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitBookButtonComponent } from './submit-book-button.component';

describe('SubmitBookButtonComponent', () => {
  let component: SubmitBookButtonComponent;
  let fixture: ComponentFixture<SubmitBookButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitBookButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitBookButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
