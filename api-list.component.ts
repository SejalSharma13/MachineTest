import { Component, OnInit } from '@angular/core';
import { ListDataService } from '../list-data.service';
import { ListItem } from './list-data.model';


@Component({
  selector: 'app-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css']
})
export class ListComponent implements OnInit {
  listItems: ListItem[] = [];
  data:any
  openmodel:boolean=false;


  constructor(private listDataService: ListDataService) { }

  ngOnInit():void {
      this.getListItems()
    
  }   

  getListItems() {this.listDataService.getListItems()
      .subscribe({
        next : (res:any) => {
          this.data=res;
          this.listItems = this.data.attribute;
          console.log(this.listItems)
          this.listItems.forEach(x=>
            {
              x.Label=this.getStatusLabel(Number(x.Label))
            })
        },
        error : (response) => {
          console.log(response);
        },
      });
  }  


  getStatusLabel(status: number): string {
    switch (status) {
      case 0:
        return 'Draft';
      case 1:
        return 'Confirm';
      case 2:
        return 'Cancel';
      case 5:
        return 'Hold';
      case 8:
        return 'Lock';
      default:
        return 'Unknown';
    }
  }
  Create_new_api(form1:any)
  {
    console.log(form1.code,'form')
    var body={
      "UnderName": form1.company,
      "StsCode": 1, //This value is fixed
      "Type": "Pack", //This value is fixed
      "Code": form1.code,
      "Image":form1.image,
      "Name":form1.name,
      "UnderId": 62, //This value is fixed
      "Remarks": form1.remarks,
      "BrnId": 496, //This value is fixed
      "AddUser": "vipul1",
      "FormName": "Brand" //This value is fixed
      }
    this.listDataService.Create_new_api( body).subscribe(x1 => {
   });
  }
  OpenModel()
  {
    this.openmodel=true;
  }
  CloseModel()
  {
    this.openmodel=false;
  }
   }
   
   
