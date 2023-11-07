import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemCachorroComponent } from './imagem-cachorro.component';

describe('ImagemCachorroComponent', () => {
  let component: ImagemCachorroComponent;
  let fixture: ComponentFixture<ImagemCachorroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagemCachorroComponent]
    });
    fixture = TestBed.createComponent(ImagemCachorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
