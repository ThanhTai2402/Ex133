import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfashionstyleComponent } from './clientfashionstyle.component';

describe('ClientfashionstyleComponent', () => {
  let component: ClientfashionstyleComponent;
  let fixture: ComponentFixture<ClientfashionstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientfashionstyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientfashionstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
