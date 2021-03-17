import { Component, OnInit } from '@angular/core';
import { IDropDownOption } from '@foo/core-library/dist/types/components/drop-down/drop-down.model';
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
    }
  ];

  dropDownOptions: IDropDownOption[] = [
    {
      name: 'China Ocean Group',
      value: 'china-ocean-shipping-group'
    },
    {
      name: 'Hamburg Süd Group',
      value: 'hamburg-sud-group'
    },
    {
      name: 'Hanjin Shipping G',
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
    }, 2000);
  }

  updateList(option: CustomEvent<IDropDownOption>) {
    const selection = option.detail;
    if (this.listOptions.some((option) => option.value === selection.value)) {
      return;
    }
    this.listOptions = [...this.listOptions, selection];
  }

}
