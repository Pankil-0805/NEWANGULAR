import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{Child1Component} from './child1/child1.component';
import{Child2Component} from './child2/child2.component';
import{Child3Component} from './child3/child3.component';
import{Inchild1Component} from './inchild1/inchild1.component';


const routes: Routes = [
{path:'Home',component:Child1Component,children:[{path:'inchild',component:Inchild1Component}]},
{path:'About',component:Child2Component},
{path:'Contact Us',component:Child3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
