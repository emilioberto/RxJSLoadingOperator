# RxJS Loading handler operator

Sets isLoading variable to true on subscription and to false on completion.
You can then show a loading indicator 

## Usage example for Angular2

```ts
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent extends BaseComponent implements OnInit {

  public constructor(private service: ExampleService) { }

  onInit(): void {
      this.service.getData()
        .pipe(handleLoading(this))
        .subscribe(
          res => {},
          err => {}
        );
  }

}
```

```html
<div class="container">
  <lib-load-indicator *ngIf="isLoading; else myAmazingComponent"></lib-load-indicator>
  <ng-template #myAmazingComponent>
    <app-example></app-example>
  </ng-template>
</div>

```
