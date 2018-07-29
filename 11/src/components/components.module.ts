import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { EmailComponent } from './email/email';
@NgModule({
	declarations: [ProgressBarComponent,
    EmailComponent],
	imports: [],
	exports: [ProgressBarComponent,
    EmailComponent]
})
export class ComponentsModule {}
