// src/webapi.ts
// Provides a safeAjax function for use in other TSX files, adapted from legacy jQuery code.
// Usage: import { webapi } from "@/webapi";

// Note: This module assumes that jQuery ($), shell.getTokenDeferred, and validateLoginSession are globally available.

export interface AjaxOptions {
  type: string;
  contentType?: string;
  url: string;
  data?: any;
  headers?: Record<string, string>;
  success?: (data: any, textStatus: string, xhr: any) => void;
  error?: (xhr: any, textStatus: string, errorThrown: any) => void;
}

export function safeAjax(ajaxOptions: AjaxOptions): Promise<any> {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    shell.getTokenDeferred().done(function (token: string) {
      if (!ajaxOptions.headers) {
        ajaxOptions.headers = { "__RequestVerificationToken": token };
      } else {
        ajaxOptions.headers["__RequestVerificationToken"] = token;
      }
      // @ts-ignore
      $.ajax(ajaxOptions)
        .done(function (data: any, textStatus: string, jqXHR: any) {
          // @ts-ignore
          validateLoginSession(data, textStatus, jqXHR, resolve);
        })
        .fail(reject);
    }).fail(function () {
      reject.apply(this, arguments);
    });
  });
}

// Optionally, you can export a webapi object for compatibility
export const webapi = { safeAjax };
