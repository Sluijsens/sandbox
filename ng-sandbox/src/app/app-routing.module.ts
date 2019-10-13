import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './empty/empty.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'empty', component: EmptyComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
