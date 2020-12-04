import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<good-hostb-component></good-hostb-component><br/><bad-hostb-component></bad-hostb-component>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'ngsp';
}
