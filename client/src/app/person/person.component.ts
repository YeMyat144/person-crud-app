import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PersonStore } from './person.store';
import { PersonModel } from './person.model';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  imports: [ReactiveFormsModule],
  providers: [PersonStore],
  template: `

    @if(loading()) {
      <p>Loading...</p>
    }

    @if(error()) {
      <p class="text-danger">Something went wrong</p>
    }

    <h3>Add/Update Person</h3>
    <form [formGroup]="personForm" (ngSubmit)="onSubmit()" class='mb-3 d-inline-flex gap-2' >
      <input type="hidden" formControlName="id">
      <div>
        <input type="text" class="form-control" formControlName="firstName" placeholder="First Name">
        @if(f.firstName.invalid && (f.firstName.dirty || f.firstName.touched)) {
          @if(f.firstName.errors?.['required']) {
            <p class="text-danger">First name is required</p>
          }
        }
      </div>
      <div>
        <input type="text" class="form-control" formControlName="lastName" placeholder="Last Name">
        @if(f.lastName.invalid && (f.lastName.dirty || f.lastName.touched)) {
          @if(f.lastName.errors?.['required']) {
            <p class="text-danger">Last name is required</p>
          }
        }
      </div>

      <div>
        <div class="d-inline-flex gap-2">
          <button type="submit" class="btn btn-primary" [disabled]="personForm.invalid">Save</button>
          <button type="reset" class="btn btn-secondary" (click)="onReset()">Reset</button>
        </div>
      </div>
      </form>

      @if(!people() || people().length<1) {
      <h5 class="text-center">No people found</h5>
      }
      @else{
      <div class="list">
       <h3>People</h3>
       <table class="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        @for(person of people(); track person.id) {
          <tr>
            <td>{{person.firstName}}</td>
            <td>{{person.lastName}}</td>
            <td>
              <div class="d-inline-flex gap-2">
              <a (click)="onEdit(person)" class="btn btn-primary">Edit</a>
              <a (click)="onDelete(person)" class="btn btn-danger">Delete</a>
              </div>
            </td>
          </tr>
        }
        </tbody>
      </table>
    </div>
  }
  `,
  styles: ``,
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

  get f(){
    return this.personForm.controls;
  }

  onSubmit() {
    const person = this.personForm.value as PersonModel;
    if (person.id === 0) {
      this.personStore.addPerson(person);
    }
    else {
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
  }
  onDelete(person: PersonModel) {
    if (confirm(`Are you sure you want to delete person with name ${person.firstName} ${person.lastName}?`)) {
      this.personStore.deletePerson(person.id);
    }
  }
}
