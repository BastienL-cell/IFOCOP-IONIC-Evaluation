import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ProductComponent } from "./product.component"

@NgModule({
    declarations: [ProductComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [ProductComponent]
})

export class ProductComponentModule {}