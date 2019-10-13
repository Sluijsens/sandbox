import { RouterModule } from '@angular/router';
import { EmptyComponent } from './empty.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        EmptyComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class EmptyModule {}
