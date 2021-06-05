import faker from 'faker';
import { BelongsToArrayValidator } from '@/validation/validators';
import { InvalidParamError } from '@/validation/errors';

let fieldLabel: string;
let fieldValue: string[];
let message: string;

const makeSut = (
  messageValidator: string = null
): { sut: BelongsToArrayValidator } => ({
  sut: new BelongsToArrayValidator(fieldLabel, fieldValue, messageValidator)
});

const makeWordDifferent = (array: string[]): string => {
  let word = faker.random.word();

  while (array.includes(word)) {
    word = faker.random.word();
  }

  return word;
};

describe('Test Unit BelongsToArrayValidator', () => {
  beforeEach(() => {
    fieldValue = faker.random.words(15).split(' ');
    fieldLabel = faker.database.column();
    message = faker.random.words(5);
  });

  test('should return error if the value not belongs to array', () => {
    const { sut } = makeSut();
    const testValue = makeWordDifferent(fieldValue);

    const result = sut.validate({ [fieldLabel]: testValue });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toEqual(new InvalidParamError(fieldLabel, testValue));
  });

  test('should return true if the value belongs to array', () => {
    const { sut } = makeSut();
    const index = Math.floor(Math.random() * fieldValue.length);
    const testValue = fieldValue[index];

    const result = sut.validate({ [fieldLabel]: testValue });

    expect(result.isRight()).toBeTruthy();
  });

  test('should return error if the value is empty', () => {
    const { sut } = makeSut();

    const testValue = null;

    const result = sut.validate({ [fieldLabel]: testValue });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toEqual(new InvalidParamError(fieldLabel, testValue));
  });

  test('should return error if the array is empty', () => {
    const sut = new BelongsToArrayValidator(fieldLabel, []);

    const testValue = null;

    const result = sut.validate({ [fieldLabel]: testValue });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toEqual(new InvalidParamError(fieldLabel, testValue));
  });

  test('should return InvalidParamError container the customMessage if fall', () => {
    const { sut } = makeSut(message);

    const testValue = null;

    const result = sut.validate({ [fieldLabel]: testValue });

    expect(result.isLeft()).toBeTruthy();
    expect(result.value).toEqual(
      new InvalidParamError(fieldLabel, testValue, message)
    );
  });
});
