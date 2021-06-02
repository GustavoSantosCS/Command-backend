import { AddressAlreadyUseError } from '@/domain/errors/address-already-use-error';
import { Account, AccountType } from '@/domain/models';
import { Either } from '@/shared/either';

export interface AddAccountUseCase {
  add(newAccount: AddAccountUseCase.DTO): Promise<AddAccountUseCase.Response>;
}

// eslint-disable-next-line no-redeclare
export namespace AddAccountUseCase {
  export type DTO = {
    nome: string;
    email: string;
    password: string;
    accountType: AccountType;
  };

  export type Response = Either<AddressAlreadyUseError, Account>;
}
