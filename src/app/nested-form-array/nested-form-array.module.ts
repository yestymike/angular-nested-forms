import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedFormArrayComponent } from './nested-form-array.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        NestedFormArrayComponent
    ],
    exports: [
        NestedFormArrayComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class NestedFormArrayModule {
}
