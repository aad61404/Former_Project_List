import { TestBed, async } from '@angular/core/testing';
import { TableBasicExample } from './table-basic-example';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableBasicExample
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TableBasicExample);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Table-pratice1'`, async(() => {
    const fixture = TestBed.createComponent(TableBasicExample);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Table-pratice1');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TableBasicExample);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Table-pratice1!');
  }));
});
