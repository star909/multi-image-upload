import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MultiImageUploadComponent } from './modules/multi-image-upload/multi-image-upload.component';

const routes: Routes = [
  { path: '', component:MultiImageUploadComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }