import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListsComponent } from './author-lists.component';

describe('AuthorListsComponent', () => {
  let component: AuthorListsComponent;
  let fixture: ComponentFixture<AuthorListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
