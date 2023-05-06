export interface UseCase<T, R> {
  handle(input?: T): Promise<R> | R;
}
