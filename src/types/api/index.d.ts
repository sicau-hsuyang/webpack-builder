export declare interface HttpResponse {

  status: boolean;

  code: number;

  msg?: string;

  data?: Array<any>
}

export declare interface ExportAction {
  doExport: () => void
}