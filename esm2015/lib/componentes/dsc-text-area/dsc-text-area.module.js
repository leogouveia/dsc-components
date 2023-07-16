import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DscTextAreaComponent } from "./dsc-text-area.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
export class DscTextAreaModule {
}
DscTextAreaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DscTextAreaComponent
                ],
                imports: [
                    CommonModule,
                    MatInputModule,
                    ReactiveFormsModule,
                    MatIconModule,
                    MatTooltipModule,
                    FormsModule
                ],
                exports: [DscTextAreaComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHNjLXRleHQtYXJlYS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kc2MtY29tcG9uZW50cy9zcmMvbGliL2NvbXBvbmVudGVzL2RzYy10ZXh0LWFyZWEvZHNjLXRleHQtYXJlYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpQjdELE1BQU0sT0FBTyxpQkFBaUI7OztZQWQ3QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLG9CQUFvQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixXQUFXO2lCQUNaO2dCQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO2FBQ2hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRHNjVGV4dEFyZWFDb21wb25lbnQgfSBmcm9tIFwiLi9kc2MtdGV4dC1hcmVhLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXRcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIERzY1RleHRBcmVhQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW0RzY1RleHRBcmVhQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBEc2NUZXh0QXJlYU1vZHVsZSB7IH1cbiJdfQ==