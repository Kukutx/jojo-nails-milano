import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaUtilsService {

  constructor() { }

  // 判断媒体是否来自网络
  isFromNetwork(url: string): boolean {
    return url.startsWith('http://') || url.startsWith('https://');
  }

  // 判断媒体是否来自本地
  isFromLocal(url: string): boolean {
    return !this.isFromNetwork(url);
  }

  // 获取媒体的来源（网络或本地）
  getMediaSource(url: string): string {
    if (this.isFromNetwork(url)) {
      return 'Network';
    } else {
      return 'Local';
    }
  }
}
