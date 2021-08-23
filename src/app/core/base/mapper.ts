export abstract class Mapper<I, O> {
  abstract toEntityResponse(param: I): O;
  abstract toEntity(param: O): I;
}

