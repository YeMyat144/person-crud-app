import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-person',
  imports: [],
  template: `
    <p>
      person.component works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent {

}
