import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfashionComponent } from './clientfashion.component';

describe('ClientfashionComponent', () => {
  let component: ClientfashionComponent;
  let fixture: ComponentFixture<ClientfashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientfashionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientfashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
