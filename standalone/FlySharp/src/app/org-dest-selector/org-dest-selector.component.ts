import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-dest-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './org-dest-selector.component.html',
  styleUrls: ['./org-dest-selector.component.css']
})

export class OrgDestSelectorComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  flightSearchForm!: FormGroup;

  public destinations = [
    { code: 'ARN', name: 'Stockholm Arlanda' },
    { code: 'CDG', name: 'Paris Charles de Gaulle' },
    { code: 'JFK', name: 'New York JFK' },
    { code: 'LAX', name: 'Los Angeles International' },
    { code: 'LHR', name: 'London Heathrow' },
    { code: 'NRT', name: 'Tokyo-Narita' }
  ]

  ngOnInit(): void {

    this.flightSearchForm = this.formBuilder.group({
      origin: new FormControl(''),
      destination: new FormControl('')
    }, { validator: this.checkOrgAndDestAreDifferent });
  }

  onSubmit() {
    this.router.navigate(['buy', {
      origin: this.flightSearchForm.controls['origin'].value,
      destination: this.flightSearchForm.controls['destination'].value
    }]);
  }


  private checkOrgAndDestAreDifferent(c: FormGroup) {
    if (c.get('origin')?.value !== c.get('destination')?.value) return null;

    return { error: 'Origin and Destination must be different' };

  }
}

