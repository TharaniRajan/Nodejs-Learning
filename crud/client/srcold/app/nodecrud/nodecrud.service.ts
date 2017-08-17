import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { INodeCrud } from './nodecrud';

@Injectable()
export class NodeCrudService {
    constructor(private _http : Http){}

    create_NodeCrud(nodecrud: INodeCrud): Observable<INodeCrud>{
        return this._http.post(`/api/NodeCrud_Default_Activity/NodeCrud/`,nodecrud)
            .map((response : Response) => <INodeCrud> response.json());
    }
    update_NodeCrud(nodecrud: INodeCrud): Observable<INodeCrud>{
        return this._http.put(`/api/NodeCrud_Default_Activity/NodeCrud/`,nodecrud)
            .map((response : Response) => <INodeCrud> response.json());
    }
    search_for_update_NodeCrud(nodecrud_id: number): Observable<INodeCrud>{
        return this._http.get(`/api/NodeCrud_Default_Activity/NodeCrud/${nodecrud_id}`)
            .map((response : Response) => <INodeCrud> response.json());
    }
    delete_NodeCrud(nodecrud: INodeCrud): Observable<INodeCrud>{
        return this._http.delete(`/api/NodeCrud_Default_Activity/NodeCrud/${nodecrud.id}`)
            .map((response : Response) => <INodeCrud> response.json());
    }
    get_all_NodeCrud(): Observable<INodeCrud[]>{
        return this._http.get(`/api/NodeCrud_Default_Activity/NodeCrud/`)
            .map((response : Response) => <INodeCrud[]> response.json());
    }
    search_NodeCrud(nodecrud: INodeCrud): Observable<INodeCrud[]>{
        return this._http.get(`/api/NodeCrud_Default_Activity/NodeCrud/search/?name=${nodecrud.name || '%25%25'}&address=${nodecrud.address || '%25%25'}`)
            .map((response : Response) => <INodeCrud[]> response.json());
    }
}