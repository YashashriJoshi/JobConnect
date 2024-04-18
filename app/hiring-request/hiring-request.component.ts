import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { Table } from 'primeng/table';
import { ScreenSizeService } from '../shared/services/screen-size.service';

@Component({
  selector: 'app-hiring-request',
  templateUrl: './hiring-request.component.html',
  styleUrls: ['./hiring-request.component.css'],
})
export class HiringRequestComponent {
  hiringListData:any=[];
  hiringForm!: FormGroup;
  pagination: any;
  copyDisplayColumn: any = [];
  displayedColumns: any = [];
  exportColumns: any = []; 
  selectedItems:any=[];
  cols:any=[];
  @ViewChild('dt') dt!: Table;
  isMobileScreen!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    private screenSizeService: ScreenSizeService
  ) {
    
    this.hiringForm = this.formBuilder.group({
      teamLeadName: this.formBuilder.control('', Validators.required),
      position: this.formBuilder.control('', Validators.required),
      jobName: this.formBuilder.control('', Validators.required),
      hiringDays: this.formBuilder.control('', Validators.required),
      jobDesc: this.formBuilder.control('', Validators.required),
      status: this.formBuilder.control('', Validators.required),
    });
   
  }
  public hello: any;
  isMenuOpened: boolean = false;

  ngOnInit(): void {
    this.cols = [
      { field: 'TLName', header: 'Team Lead Name' },
    { field: 'positions', header: 'No. Of Positions' },
      { field: 'JobPost', header: 'Job Post Name' },
      { field: 'days', header: 'Hiring Days' },
      { field: 'approvedBy', header: 'Approved By' },
      { field: 'status', header: 'Status' },
      { field: 'apprStatus', header: 'Approval Status' }
    ];
    this.exportColumns = this.cols.map((col: any) => ({
      title: col.header,
      dataKey: col.field,
    }));
    this.screenSizeService.isMobileScreen$.subscribe((isMobile:any) => {
      this.isMobileScreen = isMobile;
    });
   
  }
  
  exportToCSV() {
    if (this.dt && this.hiringListData && Array.isArray(this.hiringListData)) {
      this.dt.exportCSV();
    } else {
      console.error('Service data or table reference is empty or undefined.');
    }
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.hiringListData);
        doc.save('Service List.pdf');
      });
    });
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.hiringListData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: 'xlsx',
        type: 'array',
      });
      this.saveAsExcelFile(excelBuffer, 'Services');
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(
      data,
      fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
  onInputChange(event:any){

  }
  editProduct(data:any){}
}
