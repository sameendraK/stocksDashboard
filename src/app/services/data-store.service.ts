import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }
  transformAPIResponse(res: any) {
    res.map((i: any) => {
      i["displayPhoto"] = i.symbol[0];
    })
  }
}
