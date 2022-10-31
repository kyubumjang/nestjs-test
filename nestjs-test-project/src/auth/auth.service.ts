import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CatsRepository } from 'src/cats/cats.repository';
import { LoginRequestDto } from './dto/login.request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  /**
   * AuthService 구현, 구현 한 후에 catsController에서 DI를 통해서 return을 해 줄 것
   * catsController의 login()은 Auth 모듈을 사용
   * login을 하려면 Email, password가 필요
   * 이 두개를 통해서 해당하는 email이 데이터베이스에 있는지 체크
   * DB에 존재하는 유저와 password를 체크
   * email password 유효성 검증 통과하면 return으로 jwt token을 Response로 보내줌
   *  */
  constructor(
    private readonly catsRepository: CatsRepository,
    private jwtService: JwtService,
  ) {}

  async jwtLogIn(data: LoginRequestDto) {
    const { email, password } = data;
    //* 해당하는 email이 있는지
    const cat = await this.catsRepository.findCatByEmail(email);

    if (!cat) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요.');
    }

    //* password 일치 여부
    const isPasswordValidated: boolean = await bcrypt.compare(
      password,
      cat.password,
    );

    if (!isPasswordValidated) {
      throw new UnauthorizedException('이메일과 비밀번호를 확인해주세요');
    }

    const payload = { email: email, sub: cat.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
