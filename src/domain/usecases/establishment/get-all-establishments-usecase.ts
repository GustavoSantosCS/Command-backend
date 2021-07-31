import { EstablishmentEntity } from '@/data/entities'

export interface GetAllEstablishmentsUseCase {
  getAll: () => Promise<GetAllEstablishmentsUseCase.Response>
}

// eslint-disable-next-line no-redeclare
export namespace GetAllEstablishmentsUseCase {
  export type Response = Array<Omit<
  EstablishmentEntity,
  | 'manager'
  | 'products'
  | 'playlists'
  | 'accounts'
  | 'surveys'
  | 'musics'
  | 'deletedAt'
  >>
}
