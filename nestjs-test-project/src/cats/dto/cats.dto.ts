import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

/**
 * 사용하지 않는 것만 빼는 것 OmitType
 */
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '3280199',
    description: 'id',
  })
  id: string;
}
