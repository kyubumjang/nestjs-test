import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { CatsRepository } from 'src/cats/cats.repository';
import { Payload } from './jwt.payload';

/**
 * 인증할 때 사용
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly catsRepository: CatsRepository) {
    // JWT 설정
    /** super()
     * 자식 클래스 내에서 부모 클래스의 생성자 역할
     * 자식 클래스에서 부모 클래스의 메소드 접근 역할
     */
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 환경 변수로 저장, secretKey
      secretOrKey: process.env.JWT_SECRET,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    //* Decoding 된 payload를 받아서 해당하는 것에 대해 적합한지 유효성 검증 진행

    //* 받은 페이로드 id로 cat 찾는 것
    const cat = await this.catsRepository.findCatByIdWithoutPassword(
      payload.sub,
    );

    if (cat) {
      return cat; // request.user
    } else {
      throw new UnauthorizedException('접근 오류');
    }
  }
}
