import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';
import {ImageType} from '../../shared/model/image-type';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
  

@Component({
  selector: 'app-multi-image-upload',
  templateUrl: './multi-image-upload.component.html',
  styleUrls: ['./multi-image-upload.component.css']
})
export class MultiImageUploadComponent implements OnInit {

  constructor(private notify:NotificationService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  /**
   * @ formData : uploadedImageData
   * @ Purpose  : Saving image data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
  uploadedImageData:FormGroup = this.fb.group({
    file:['',[Validators.required]],
    fileSource:['',[Validators.required]]
  })
  images = [];

  /**
   * @ Function : onFileChange
   * @ Purpose  : Creating change event on file upload
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
public onFileChange(event:any){
  if(event.target.files){
    for(let i=0;i<event.target.files.length;i++){
      if(event.target.files[i]){
        let fileType = event.target.files[i].type;
        if(fileType==ImageType.imageJPEG || fileType==ImageType.imageJPG ||fileType==ImageType.imagePNG){
          var reader = new FileReader();
          reader.readAsDataURL(event.target.files[i]);
          reader.onload=(event:any)=>{
          if(event.loaded < 3000000){
            this.images.push(event.target.result);
            this.uploadedImageData.patchValue({
              fileSource: this.images

           });
          }
          else {
            this.failFileSize();
          }
          }
        }
        else{
          this.failFileType();
        }
      }
    }
  }
}
 /**
   * @ Function : f()
   * @ Purpose  : getting form controls
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
public get f():any{
  return this.uploadedImageData.controls;
}
 /**
   * @ Function : imageSubmit()
   * @ Purpose  : Submitting image form data
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
public imageSubmit():void{
console.log("Image Data:",this.uploadedImageData.value);
this.showSuccess();
}
 /**
   * @ Functions : showSuccess,failFileType,failFileSize
   * @ Purpose  : Giving notification messages
   * @ version  : 1.0.1
   * @ author   : Shivam
   */
private showSuccess():void {
  this.notify.showSuccessMessage("File Uploaded Successfully !!", "Notification");
}

private failFileType():void {
  this.notify.showFailMessage("File Type Not Match !!", "Notification");
}

private failFileSize():void {
  this.notify.showFailSizeMessage("File Size Exceeded !!", "Notification");
}

}
