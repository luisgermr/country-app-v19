import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPageComponent { }
