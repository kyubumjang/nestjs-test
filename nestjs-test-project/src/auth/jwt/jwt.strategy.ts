import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * 인증할 때 사용
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 환경 변수로 저장, secretKey
      secretOrKey: 'secret',
      ignoreExpiration: false,
    });
  }

  async validate(payload) {
    //TODO: payload를 받아서 해당하는 것에 대해 유효성 검증 진행
  }
}
