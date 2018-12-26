import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHandleComponent } from './post-handle.component';

describe('PostHandleComponent', () => {
  let component: PostHandleComponent;
  let fixture: ComponentFixture<PostHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
