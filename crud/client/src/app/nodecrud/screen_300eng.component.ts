import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NodeCrudService } from './nodecrud.service';
import { GridOptions } from 'ag-grid';
import { INodeCrud } from './nodecrud';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_300eng.component.html'
})
export class Screen_300engComponent implements OnInit {
  private Table_311GridOptions: GridOptions;

  private nodecrud: INodeCrud = {
  	id: 0,
  	name: '',
  	address: ''}
  ;

  private array_NodeCrud: INodeCrud[] = [];

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nodecrudservice: NodeCrudService) { 
    this.toastr.setRootViewContainerRef(vcr);
    this.Table_311GridOptions = {
    	columnDefs: [
    		{
    			headerName: "Name",
    			field: "name",
    		},
        {
          headerName: "Address",
          field: "address",
        }
    	],

    	rowSelection: 'single',
    	onRowClicked: this.edit_detail_Employee.bind(this)
    };

  }

  ngOnInit() {
    this.nodecrudservice.get_all_NodeCrud()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.array_NodeCrud =data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

edit_detail_Employee(event){
    this.nodecrudservice.nodecrud_id = event.data.id;
    this.router.navigate(['/Screen_350eng']);
  }

  get_all_NodeCrud(){
      this.nodecrudservice.get_all_NodeCrud()
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.array_NodeCrud =data;
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_NodeCrud(){
      this.nodecrudservice.search_NodeCrud(this.nodecrud)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.array_NodeCrud = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}