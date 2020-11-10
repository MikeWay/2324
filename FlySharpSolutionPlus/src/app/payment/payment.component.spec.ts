import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentComponent } from './payment.component';


describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
      imports: [FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should emit a closeEvent when the form is submitted', () => {
    let result = '';
    component.closeEvent.subscribe((res) => {
      result = res;
    })
    component.onSubmit();
    expect(result).toBe('Purchased');
  });

  it('should emit a closeEvent when the form is cancelled', () => {
    let result = '';
    component.closeEvent.subscribe((res) => {
      result = res;
    })
    component.onCancel();
    expect(result).toBe('Cancelled');
  });
});
