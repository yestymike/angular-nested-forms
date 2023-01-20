import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedFormGroupComponent } from './nested-form-group.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        NestedFormGroupComponent
    ],
    exports: [
        NestedFormGroupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class NestedFormGroupModule {
}
