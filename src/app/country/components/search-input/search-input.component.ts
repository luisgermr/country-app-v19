import { String } from './../../../../../node_modules/lightningcss/node/ast.d';
import { ChangeDetectionStrategy, Component, EventEmitter, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {

  placeholder = input('Buscar')

  value = output<string>()
  

}
