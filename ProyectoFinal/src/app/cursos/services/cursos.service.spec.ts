import { TestBed } from '@angular/core/testing';
import { CursoService } from './cursos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CursosService', () => {
  let service: CursoService;
  let httpClientSpy: { get: jasmine.Spy }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers:[CursoService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
