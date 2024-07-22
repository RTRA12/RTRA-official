import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAndAchievmentsComponent } from './projects-and-achievments.component';

describe('ProjectsAndAchievmentsComponent', () => {
  let component: ProjectsAndAchievmentsComponent;
  let fixture: ComponentFixture<ProjectsAndAchievmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsAndAchievmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAndAchievmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
