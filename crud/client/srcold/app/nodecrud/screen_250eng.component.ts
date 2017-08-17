import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NodeCrudService } from './nodecrud.service';
import { INodeCrud } from './nodecrud';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_250eng.component.html'
})
export class Screen_250engComponent implements OnInit {
  private nodecrud: INodeCrud = {
  	id: 0,
  	name: '',
  	address: ''}
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private nodecrudservice: NodeCrudService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_NodeCrud(){
      this.nodecrudservice.create_NodeCrud(this.nodecrud)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}