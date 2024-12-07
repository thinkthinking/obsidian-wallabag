export interface WallabagSettings {
  serverUrl: string;
  tag: string;
  folder: string;
  folderTemplate: string;
  folderDateFormat: string;
  downloadAsPDF: string;
  articleTemplate: string;
  pdfFolder: string;
  createPDFNote: string;
  convertHtmlToMarkdown: string;
  idInTitle: string;
  archiveAfterSync: string;
  syncOnStartup: string;
  syncArchived: string;
  syncUnRead: string;
  tagFormat: string;
  unreadFolder: string;
  archivedFolder: string;
  basePath: string;  // 添加基础路径设置
}

export const DEFAULT_SETTINGS: WallabagSettings = {
  serverUrl: '',
  tag: '',
  folder: '',
  folderTemplate: '{{folder}}/{{tags}}',
  folderDateFormat: 'YYYY/MM/DD',
  downloadAsPDF: 'false',
  articleTemplate: '',
  pdfFolder: '',
  createPDFNote: 'false',
  convertHtmlToMarkdown: 'false',
  idInTitle: 'false',
  archiveAfterSync: 'false',
  syncOnStartup: 'false',
  syncArchived: 'false',
  syncUnRead: 'true',
  tagFormat: 'csv',
  unreadFolder: '',
  archivedFolder: '',
  basePath: '',  // 默认为空，表示使用 vault 根目录
};
