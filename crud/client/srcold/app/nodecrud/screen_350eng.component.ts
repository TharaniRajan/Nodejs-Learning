import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NodeCrudService } from './nodecrud.service';
import { INodeCrud } from './nodecrud';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_350eng.component.html'
})
export class Screen_350engComponent implements OnInit {
  private nodecrud: INodeCrud = {
  	id: 0,
  	name: '',
  	address: ''}
  ;
  @ViewChild('modalSFU')
   mymodalSFU: ModalComponent;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nodecrudservice: NodeCrudService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    if(!this.nodecrud.id)
    	this.mymodalSFU.open();


  }


  update_NodeCrud(){
      this.nodecrudservice.update_NodeCrud(this.nodecrud)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  search_for_update_NodeCrud(){
      this.mymodalSFU.close();
      this.nodecrudservice.search_for_update_NodeCrud(this.nodecrud.id)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
            this.nodecrud = data
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }
  delete_NodeCrud(){
      this.nodecrudservice.delete_NodeCrud(this.nodecrud)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}