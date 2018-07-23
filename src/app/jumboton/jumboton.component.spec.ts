import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotonComponent } from './jumboton.component';

describe('JumbotonComponent', () => {
  let component: JumbotonComponent;
  let fixture: ComponentFixture<JumbotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
