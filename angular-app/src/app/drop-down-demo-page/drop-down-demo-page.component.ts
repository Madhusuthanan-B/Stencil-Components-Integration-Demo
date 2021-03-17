import { Component, OnInit } from '@angular/core';
import { IDropDownOption } from '@foo/core-library/dist/types/components/drop-down/drop-down.model';

@Component({
  selector: 'app-drop-down-demo-page',
  templateUrl: './drop-down-demo-page.component.html',
  styleUrls: ['./drop-down-demo-page.component.scss']
})
export class DropDownDemoPageComponent implements OnInit {
  dropDownOptions: IDropDownOption[] = [
    {
      name: 'Vessel 1',
      value: 'moller-maersk'
    },
    {
      name: 'Vessel 2',
      value: 'mediterranean-ship-company'
    },
    {
      name: 'Vessel 3',
      value: 'cma-cgm-group'
    },
    {
      name: 'Vessel 4',
      value: 'china-ocean-shipping-group'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
