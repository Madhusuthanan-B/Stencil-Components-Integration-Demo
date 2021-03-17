import { Component, OnInit } from '@angular/core';
import { IListGroupOption } from '@foo/core-library/dist/types/components/list-group/list-group.model';

@Component({
  selector: 'app-combined-playground',
  templateUrl: './combined-playground.component.html',
  styleUrls: ['./combined-playground.component.scss']
})
export class CombinedPlaygroundComponent implements OnInit {

  isLoading = false;
  showList = false;

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
  ];

  constructor() { }

  ngOnInit(): void {
  }

  loadList() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.showList = true;
    }, 3000);
  }

}
