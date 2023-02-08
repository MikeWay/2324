import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

import { BuyFlightComponent } from './buy-flight.component';

describe('BuyFlightComponent', () => {
  let component: BuyFlightComponent;
  let fixture: ComponentFixture<BuyFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BuyFlightComponent ],
      providers:[
        /* BuyFlightComponent takes an ActivatedRoute as a constructor argument. In our code we are accessing
         the params of property ActivatedRoute. The useValue code below creates a very simple Observable as the 
         value of params. It is adequate to meet the needs of the test so far
         */        
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{ id: 1 }]),
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
