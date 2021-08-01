import { SurveyEntity } from '@/data/entities'
import { AppError } from '@/shared/errors'

export class ClientAlreadyVotedError extends AppError {
  constructor(survey: SurveyEntity) {
    super('Usuário ja votou nessa enquete', { surveyId: survey.id })
    this.name = 'ClientAlreadyVotedError'
  }
}
