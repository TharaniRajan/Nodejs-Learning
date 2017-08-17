import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_250engComponent } from './screen_250eng.component';
import { Screen_300engComponent } from './screen_300eng.component';
import { Screen_350engComponent } from './screen_350eng.component';
import { MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular/main';
import { NodeCrudService } from './nodecrud.service';

@NgModule({
    declarations: [
        Screen_250engComponent,
        Screen_300engComponent,
        Screen_350engComponent
    ],
    imports: [
        MdInputModule,
        FormsModule,
        AgGridModule.withComponents([]),
        RouterModule.forChild([
            { path: 'Screen_250eng', component: Screen_250engComponent},
            { path: 'Screen_300eng', component: Screen_300engComponent},
            { path: 'Screen_350eng', component: Screen_350engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        NodeCrudService
    ]
})

export class NodeCrudModule {

}