import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PersonStore } from './person.store';
import { PersonModel } from './person.model';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  providers: [PersonStore],
  template: `
    <div class="container py-4 animate-fade-in">
      <!-- Loading State -->
      @if(loading()) {
        <div class="text-center py-5">
          <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-2">Loading people...</p>
        </div>
      }

      <!-- Error State -->
      @if(error()) {
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error!</strong> Something went wrong while loading people.
        </div>
      }

      <!-- Form Section -->
      <div class="card shadow-sm mb-4">
        <div class="card-header bg-success text-white">
          <h3 class="mb-0">Add/Update Person</h3>
        </div>
        <div class="card-body">
          <form [formGroup]="personForm" (ngSubmit)="onSubmit()">
            <input type="hidden" formControlName="id">
            
            <div class="row g-3">
              <div class="col-md-5">
                <label for="firstName" class="form-label">First Name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="firstName"
                  [ngClass]="{'is-invalid': f.firstName.invalid && (f.firstName.dirty || f.firstName.touched)}"
                  formControlName="firstName" 
                  placeholder="Enter first name">
                @if(f.firstName.invalid && (f.firstName.dirty || f.firstName.touched)) {
                  <div class="invalid-feedback">
                    @if(f.firstName.errors?.['required']) {
                      <span>First name is required</span>
                    }
                  </div>
                }
              </div>
              
              <div class="col-md-5">
                <label for="lastName" class="form-label">Last Name</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="lastName"
                  [ngClass]="{'is-invalid': f.lastName.invalid && (f.lastName.dirty || f.lastName.touched)}"
                  formControlName="lastName" 
                  placeholder="Enter last name">
                @if(f.lastName.invalid && (f.lastName.dirty || f.lastName.touched)) {
                  <div class="invalid-feedback">
                    @if(f.lastName.errors?.['required']) {
                      <span>Last name is required</span>
                    }
                  </div>
                }
              </div>
              
              <div class="col-md-2 d-flex align-items-end">
                <div class="d-flex gap-2 w-100">
                  <button 
                    type="submit" 
                    class="btn btn-success flex-grow-1"
                    [disabled]="personForm.invalid">
                    {{ personForm.value.id ? 'Update' : 'Save' }}
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-outline-secondary"
                    (click)="onReset()">
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- People List Section -->
      <div class="card shadow-sm">
        <div class="card-body p-0">
          @if(!people() || people().length < 1) {
            <div class="text-center py-5">
              <i class="bi bi-people-fill text-muted" style="font-size: 3rem;"></i>
              <h5 class="mt-3">No people found</h5>
              <p class="text-muted">Add a new person using the form above</p>
            </div>
          }
          @else {
            <div class="table-responsive">
              <table class="table table-hover mb-0">
                <thead class="table-light">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th class="text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  @for(person of people(); track person.id) {
                    <tr [class.table-success]="personForm.value.id === person.id">
                      <td>{{ person.firstName }}</td>
                      <td>{{ person.lastName }}</td>
                      <td class="text-end">
                        <div class="btn-group btn-group-sm">
                          <button 
                            (click)="onEdit(person)" 
                            class="btn btn-outline-success"
                            [disabled]="loading()">
                            <i class="bi bi-pencil-square"></i> Edit
                          </button>
                          <button 
                            (click)="onDelete(person)" 
                            class="btn btn-outline-danger"
                            [disabled]="loading()">
                            <i class="bi bi-trash"></i> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .card {
      border: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    
    .table-hover tbody tr {
      transition: background-color 0.2s ease;
    }
    
    .btn {
      transition: all 0.2s ease;
    }
    
    .btn-outline-success:hover {
      background-color: var(--bs-success);
      color: white;
    }
    
    .btn-outline-danger:hover {
      background-color: var(--bs-danger);
      color: white;
    }
    
    .form-control {
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
    }
    
    .form-control:focus {
      box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
    }
    
    .invalid-feedback {
      animation: fadeIn 0.3s ease;
    }
    
    .table-success {
      --bs-table-bg: rgba(13, 110, 253, 0.1);
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {
  private readonly personStore = inject(PersonStore);

  people = this.personStore.people;
  loading = this.personStore.loading;
  error = this.personStore.error;

  private readonly fb = inject(FormBuilder);

  personForm = this.fb.group({
    id: [0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  get f() {
    return this.personForm.controls;
  }

  onSubmit() {
    const person = this.personForm.value as PersonModel;
    if (person.id === 0) {
      this.personStore.addPerson(person);
    } else {
      this.personStore.updatePerson(person);
    }
    this.onReset();
  }

  onReset() {
    this.personForm.reset();
    this.personForm.patchValue({
      id: 0,
      firstName: '',
      lastName: ''
    });
  }

  onEdit(person: PersonModel) {
    this.personForm.patchValue(person);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onDelete(person: PersonModel) {
    if (confirm(`Are you sure you want to delete ${person.firstName} ${person.lastName}?`)) {
      this.personStore.deletePerson(person.id);
    }
  }
}