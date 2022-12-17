import { ScreenInfoService } from './screen-info.service';

describe('ScreenInfoService', () => {
  let service: ScreenInfoService;

  beforeEach(() => {
    /* Next two lines are the generated code */
    // TestBed.configureTestingModule({});
    // service = TestBed.inject(ScreenInfoService);
    /* Code below is all that is needed as there are no dependencies of this service */
    service = new ScreenInfoService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store screenWidth', () => {
    service.screenWidth = 3.142;
    expect(service.screenWidth).toBe(3.142);
  });
});
