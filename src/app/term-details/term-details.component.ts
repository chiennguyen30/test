import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TermService } from '../services/term-service/term.service';
import { Term } from '../services/term-service/term.model';
import { UserService } from '../../app/services/user.service'; 
@Component({
  selector: 'app-term-details',
  templateUrl: './term-details.component.html',
  styleUrls: ['./term-details.component.scss']
})
export class TermDetailsComponent implements OnInit {
  term: Term | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private termService: TermService,
    public userService: UserService 
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.termService.viewTermDetails(id).subscribe((data) => {
          this.term = data;
        });
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/term-management']);
  }

  onEdit(): void {
    if (this.term) {
      this.router.navigate(['/edit-term'], { queryParams: { id: this.term.id } });
    }
  }
  get isFinancialStaff(): boolean {
    return this.userService.isFinancialStaff(); 
  }
}
