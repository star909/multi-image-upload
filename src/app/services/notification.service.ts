import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr:ToastrService) { }
/**
   * @ Functions : showSuccess,failFileType,failFileSize
   * @ Purpose  : Creating notification instances
   * @ version  : 1.0.1
   * @ author   : Shivam
   */

 public showSuccessMessage(message:string,tittle:string){
    this.toastr.success(message,tittle, {
    timeOut:3000,
    positionClass:"toast-top-right"
})
  }

  public showFailMessage(message:string,tittle:string){
    this.toastr.success(message,tittle, {
    timeOut:3000,
    positionClass:"toast-top-right"
})
}

public showFailSizeMessage(message:string,tittle:string){
    this.toastr.success(message,tittle, {
    timeOut:3000,
    positionClass:"toast-top-right"
})
  }

}
