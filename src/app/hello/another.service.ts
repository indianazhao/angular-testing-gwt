import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnotherService {
  constructor(private http: HttpClient) {}
}
