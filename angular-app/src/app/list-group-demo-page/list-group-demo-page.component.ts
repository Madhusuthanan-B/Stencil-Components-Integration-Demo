import { Component, OnInit } from '@angular/core';
import { IListGroupOption } from '@foo/core-library/dist/types/components/list-group/list-group.model';

@Component({
  selector: 'app-list-group-demo-page',
  templateUrl: './list-group-demo-page.component.html',
  styleUrls: ['./list-group-demo-page.component.scss']
})
export class ListGroupDemoPageComponent implements OnInit {
  listOptions: IListGroupOption[] = [
    {
      name: 'A.P. Moller–Maersk Group. TEU: 3,012,172',
      value: 'moller-maersk'
    },
    {
      name: 'Mediterranean Shipping Company S.A. (MSC) TEU',
      value: 'mediterranean-ship-company'
    },
    {
      name: 'CMA CGM Group',
      value: 'cma-cgm-group'
    },
    {
      name: 'China Ocean Shipping (Group) Company (COSCO)',
      value: 'china-ocean-shipping-group'
    },
    {
      name: 'Hamburg Süd Group. TEU: 646,918',
      value: 'hamburg-sud-group'
    },
    {
      name: 'Hanjin Shipping. TEU: 621,243',
      value: 'hanjin-shipping'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
