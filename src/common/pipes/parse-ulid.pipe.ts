import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseUlidPipe implements PipeTransform {
  transform(value: string) {
    // ULIDの形式チェック
    // 26文字 かつ Crockford's Base32 (I, L, O, U を除く英数字)
    // ※ 大文字小文字を許容する場合は 'i' フラグをつけてください
    const isUlid = /^[0-9A-HJKMNP-TV-Z]{26}$/i.test(value);

    if (!isUlid) {
      throw new BadRequestException('Validation failed (ULID is expected)');
    }

    return value;
  }
}
