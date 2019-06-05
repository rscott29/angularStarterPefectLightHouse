import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: () =>
    import('./feature1/feature1.module').then(mod => mod.Feature1Module)
  },
  {
    path: 'feature2',
    loadChildren: () =>
    import('./feature2/feature2.module').then(mod => mod.Feature2Module)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
