import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAtualComponent } from './item-atual.component';

describe('ItemAtualComponent', () => {
  let component: ItemAtualComponent;
  let fixture: ComponentFixture<ItemAtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemAtualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
