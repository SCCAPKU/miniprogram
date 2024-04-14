import { MPFileService, FileUploadOptions } from './../file';
import { HTTPTransport } from './../core';
export declare class HighFileSevice extends MPFileService {
    private getFileUploadInfo;
    constructor(transport: HTTPTransport, options: any);
    uploadFile(options: FileUploadOptions): Promise<any>;
}
