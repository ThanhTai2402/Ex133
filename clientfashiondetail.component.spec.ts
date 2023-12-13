import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientfashiondetailComponent } from './clientfashiondetail.component';

describe('ClientfashiondetailComponent', () => {
  let component: ClientfashiondetailComponent;
  let fixture: ComponentFixture<ClientfashiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientfashiondetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientfashiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
