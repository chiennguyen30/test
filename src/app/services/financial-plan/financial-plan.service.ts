import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FinancialPlans } from './plan-model';

@Injectable({
  providedIn: 'root'
})
export class FinancialPlanService {
  private baseUrl = 'https://localhost:7273/FinancialPlan';

  constructor(private http: HttpClient) { }

  getPlans(): Observable<FinancialPlans[]> {
    return this.http.get<FinancialPlans[]>(`${this.baseUrl}/GetPlans`);
  }

  addPlan(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post(`${this.baseUrl}/AddPlan`, formData);
  }

  updatePlan(id: string, plan: FinancialPlans): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdatePlan/${id}`, plan);
  }

  deletePlan(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/DeletePlan/${id}`);
  }

  searchPlanByName(name: string): Observable<FinancialPlans[]> {
    return this.http.get<FinancialPlans[]>(`${this.baseUrl}/SearchPlanByName/${name}`);
  }

  viewPlanDetails(id: string): Observable<FinancialPlans> {
    return this.http.get<FinancialPlans>(`${this.baseUrl}/ViewPlanDetails/${id}`);
  }

  getPlansByStatus(status: string): Observable<FinancialPlans[]> {
    return this.http.get<FinancialPlans[]>(`${this.baseUrl}/GetPlansByStatus/${status}`);
  }
}
