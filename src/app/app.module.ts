import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NestedFormArrayModule } from "./nested-form-array/nested-form-array.module";
import { NestedFormGroupModule } from "./nested-form-group/nested-form-group.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NestedFormArrayModule,
        NestedFormGroupModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
